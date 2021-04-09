package recrutation.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import recrutation.models.Task;

import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<Task,Long> {
   Task findTaskById(Long id);
   List<Task> findAllByIdUser(Long id);
}
