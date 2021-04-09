package recrutation.validator.availability;

import org.springframework.stereotype.Component;
import recrutation.models.User;
import recrutation.repositories.UserRepository;


@Component
public class UserEmailAvailabilityValidator implements AvailabilityValidator<User> {
    private final UserRepository userRepository;

    public UserEmailAvailabilityValidator(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public String validate(User value) {
        User email = userRepository.findUserByEmail(value.getEmail());
        if (email != null)
            return "email exist";
        else
            return null;

    }
}
