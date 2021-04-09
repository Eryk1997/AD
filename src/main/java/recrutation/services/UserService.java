package recrutation.services;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import recrutation.models.User;
import recrutation.repositories.UserRepository;
import recrutation.validator.attributes.UserAttributesValidator;
import recrutation.validator.availability.UserAvailabilityValidator;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserAttributesValidator userAttributesValidator;
    private final UserAvailabilityValidator userAvailabilityValidator;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, UserAttributesValidator userAttributesValidator, UserAvailabilityValidator userAvailabilityValidator) {
        this.userRepository = userRepository;
        this.userAttributesValidator = userAttributesValidator;
        this.userAvailabilityValidator = userAvailabilityValidator;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public List<User> selectAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public User getUser(Long id) {
        User user = userRepository.findUserById(id);
        return user;
    }



    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public List<String> addUser(User user) {
        List<String> message = new ArrayList<>();
        message.addAll(userAvailabilityValidator.validate(user));
        message.addAll(userAttributesValidator.validate(user));
        if (message.isEmpty()) {
            userRepository.save(
                    user.toBuilder()
                            .name(user.getName())
                            .surname(user.getSurname())
                            .email(user.getEmail())
                            .password(passwordEncoder.encode(user.getPassword()))
                            .build()
            );
        }
        return message;
    }

    public List<String> updateUser(Long id, User user) {
        List<String> message = new ArrayList<>();
        message.addAll(userAvailabilityValidator.validate(user));
        message.addAll(userAttributesValidator.validate(user));
        if (message.isEmpty()) {
            userRepository.save(userRepository.findUserById(id)
                    .toBuilder()
                    .name(user.getName())
                    .surname(user.getSurname())
                    .email(user.getEmail())
                    .password(passwordEncoder.encode(user.getPassword()))
                    .build());
        }
        return message;
    }

    public User getByEmail(String email){
        User user = userRepository.findUserByEmail(email);
        return user;
    }
}
