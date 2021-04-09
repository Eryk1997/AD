package recrutation.controllers;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import recrutation.models.Task;
import recrutation.models.User;
import recrutation.services.TaskService;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class TaskController {
    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping("/tasks")
    public List<Task> selectAllTasks() {
        return taskService.selectAllTasks();
    }

    @DeleteMapping("/tasks/{id}")
    public boolean deleteTaskById(@PathVariable Long id, @AuthenticationPrincipal User user) {
        return taskService.deleteTask(id, user);
    }

    @PostMapping("/tasks")
    public List<String> addTask(@Valid @RequestBody Task task, @AuthenticationPrincipal User user) {
        return taskService.addTask(task, user);
    }


    @PutMapping("/tasks/{id}")
    public List<String> updateTask(@PathVariable Long id, @Valid @RequestBody Task task, @AuthenticationPrincipal User user) {
        return taskService.updateTask(id, task, user);
    }


    @GetMapping("/tasks/{id}")
    public List<Task> getByIdUser(@PathVariable Long id){
        return taskService.getByIdUser(id);
    }


}
