# AuthFort

AuthFort is a full-stack authentication and user profile management application. It consists of a Java Spring Boot backend and a React frontend built with Vite.

## Repository Structure

```
AuthFort/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── insnehacoddep/
│   │   │   │       └── AuthFort/
│   │   │   │           ├── AuthFortApplication.java
│   │   │   │           ├── config/
│   │   │   │           │   ├── CustomAuthenticationEntryPoint.java
│   │   │   │           │   └── SecurityConfig.java
│   │   │   │           ├── controller/
│   │   │   │           │   ├── AuthController.java
│   │   │   │           │   └── ProfileController.java
│   │   │   │           ├── entity/
│   │   │   │           │   └── UserEntity.java
│   │   │   │           ├── filter/
│   │   │   │           │   └── JwtRequestFilter.java
│   │   │   │           ├── io/
│   │   │   │           │   ├── AuthRequest.java
│   │   │   │           │   ├── AuthResponse.java
│   │   │   │           │   ├── ProfileRequest.java
│   │   │   │           │   ├── ProfileResponse.java
│   │   │   │           │   └── ResetPasswordRequest.java
│   │   │   │           ├── Repository/
│   │   │   │           │   └── UserRepository.java
│   │   │   │           ├── service/
│   │   │   │           │   ├── AppUserDetailsService.java
│   │   │   │           │   ├── EmailService.java
│   │   │   │           │   ├── ProfileService.java
│   │   │   │           │   └── ProfileServiceImpl.java
│   │   │   │           └── util/
│   │   │   │               └── JwtUtil.java
│   │   │   └── resources/
│   │   │       ├── application.properties
│   │   │       ├── static/
│   │   │       └── templates/
│   │   │           ├── password-reset-email.html
│   │   │           └── verify-email.html
│   └── test/
│       └── java/
│           └── insnehacoddep/
│               └── AuthFort/
│                   └── AuthFortApplicationTests.java
├── frontend/
│   ├── public/
│   │   └── favicon.png
│   ├── src/
│   │   ├── assets/
│   │   │   ├── assests.js
│   │   │   ├── header.png
│   │   │   ├── logo-home.png
│   │   │   └── logo.png
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Menubar.jsx
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   │   ├── EmailVerify.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── util/
│   │   │   └── constants.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Backend

The backend is built with Spring Boot and provides RESTful APIs for authentication, user profile management, and email verification.

### Technologies

- Java 17+
- Spring Boot
- Spring Security
- JWT for authentication
- Maven for build and dependency management

### API Endpoints

#### Authentication Endpoints
- `POST /login` - Authenticate user and return JWT token
- `GET /is-authenticated` - Check if user is authenticated
- `POST /logout` - Logout user by clearing JWT cookie

#### Password Reset Endpoints
- `POST /send-reset-otp` - Send OTP for password reset
- `POST /reset-password` - Reset password using OTP

#### Email Verification Endpoints
- `POST /send-otp` - Send OTP for email verification
- `POST /verify-otp` - Verify email using OTP

#### Profile Endpoints
- `POST /register` - Register a new user
- `GET /profile` - Get user profile information

### Running the Backend

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Build the project using Maven:
   ```bash
   ./mvnw clean install
   ```

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

The backend server will start on `http://localhost:8080` by default.

## Frontend

The frontend is a React application built with Vite. It provides the user interface for login, registration, profile management, password reset, and email verification.

### Technologies

- React 18+
- Vite
- JavaScript (ES6+)
- CSS

### Running the Frontend

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Environment Configuration

- Backend configuration is located in `backend/src/main/resources/application.properties`.
- Frontend environment variables can be configured as needed in the frontend project.

## Building for Production

- Backend: Use Maven to build a jar file.
- Frontend: Use `npm run build` in the frontend directory to create a production build.

## Testing

- Backend tests are located in `backend/src/test`.
- Run backend tests with:
  ```bash
  ./mvnw test
  ```

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the project maintainer.
- Email: snehapal153@gmail.com
