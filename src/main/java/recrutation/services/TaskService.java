package recrutation.services;

import org.springframework.stereotype.Service;
import recrutation.models.Task;
import recrutation.models.User;
import recrutation.repositories.TaskRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import javax.persistence.criteria.Predicate;

@Service
public class TaskService {
    private final TaskRepository taskRepository;


    @PersistenceContext
    private EntityManager entityManager;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> selectAllTasks() {
        List<Task> tasks = new ArrayList<>();
        taskRepository.findAll().forEach(tasks::add);
        return tasks;
    }

    public Task getTask(Long id) {
        Task task = taskRepository.findTaskById(id);
        return task;

    }

    public List<String> addTask(Task task, User user) {
        if (user == null)
            return Collections.singletonList("you need log in to create task");
        List<String> message = new ArrayList<>();
        if (message.isEmpty()) {
            taskRepository.save(task
                    .toBuilder()
                    .idUser(user.getId())
                    .build());
        }
        return message;
    }

    public boolean deleteTask(Long id, User user) {
        if (user == null)
            return false;
        taskRepository.deleteById(id);
        return true;
    }

    public List<String> updateTask(Long id, Task task, User user) {
        if (user == null)
            return Collections.singletonList("you need log in to update task");
        List<String> message = new ArrayList<>();
        if (message.isEmpty()) {
            taskRepository.save(taskRepository.findTaskById(id)
                    .toBuilder()
                    .name(task.getName())
                    .build()
            );
        }
        return message;
    }


    public List<Task> getByIdUser(Long id){
        return taskRepository.findAllByIdUser(id);
    }

}
