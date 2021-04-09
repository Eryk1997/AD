package recrutation.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import recrutation.models.User;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    User findUserById(Long id);
    User findUserByEmail(String email);
}
