package recrutation.validator.attributes;

import org.springframework.stereotype.Component;
import recrutation.models.User;

@Component
public class UserEmailValidator implements Validator<User> {

    @Override
    public String validate(User value) {
        String attribute = value.getEmail();
        if (attribute.isEmpty())
            return "EMPTY_EMAIL";
        else if(!attribute.matches("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"))
            return "INCORRECT_EMAIL_ADDRESS";
        return null;
    }
}
