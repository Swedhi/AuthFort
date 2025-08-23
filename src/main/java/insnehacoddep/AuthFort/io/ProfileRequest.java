package insnehacoddep.AuthFort.io;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ProfileRequest {
    @NotBlank(message = "Name should not be empty")
    private String name;
    @Email(message = "Enter valid Email")
    @NotNull(message = "Email should not be empty")
    private String email;
    @Size(min = 6, message = "Password must be atleast 6 characters")
    private String password;
}
