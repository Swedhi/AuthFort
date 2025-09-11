import { createContext, useEffect, useState } from "react";
import { AppConstants } from "../util/constants.js";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const backendURL = AppConstants.BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    // Save token in localStorage whenever it changes
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            // Set default Axios header
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        } else {
            localStorage.removeItem("token");
            delete axios.defaults.headers.common['Authorization'];
        }
    }, [token]);

    // Fetch user data, accepts token parameter to avoid stale state issues
    const getUserData = async (authToken = token) => {
        if (!authToken) {
            setIsLoggedIn(false);
            setUserData(null);
            return;
        }

        try {
            const response = await axios.get(`${backendURL}/profile`, {
                headers: {
                    Authorization: `Bearer ${authToken}`
                }
            });
            setUserData(response.data);
            setIsLoggedIn(true);
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
            setIsLoggedIn(false);
            setUserData(null);
        }
    };

    // Check auth state on app load
    const getAuthState = async () => {
        if (!token) {
            setIsLoggedIn(false);
            setUserData(null);
            return;
        }

        try {
            const response = await axios.get(`${backendURL}/is-authenticated`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (response.status === 200 && response.data === true) {
                await getUserData(token);
            } else {
                setIsLoggedIn(false);
                setUserData(null);
            }
        } catch (error) {
            console.error(error);
            setIsLoggedIn(false);
            setUserData(null);
        }
    };

    // Initialize auth state on app load
    useEffect(() => {
        getAuthState();
    }, [token]);

    // Login function updates token and immediately fetches user data
    const login = async (newToken) => {
        setToken(newToken);
        await getUserData(newToken); // ensures fresh token is used
    };

    // Logout clears token and state
    const logout = () => {
        setToken(null);
        setIsLoggedIn(false);
        setUserData(null);
    };

    const contextValue = {
        backendURL,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        getUserData,
        token,
        setToken,
        login,
        logout,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
