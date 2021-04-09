package recrutation.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import recrutation.models.User;
import recrutation.services.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/allUsers")
    public List<User> selectAllUsers(){
        return userService.selectAllUsers();
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok("User is removed");
    }

    @PostMapping("/addUser")
    public List<String> addUser(@Valid @RequestBody User user){
        return userService.addUser(user);
    }

    @PutMapping("/updateUser/{id}")
    public List<String> updateUser(@PathVariable Long id, @RequestBody User user){
        return userService.updateUser(id,user);
    }

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable Long id){
        return userService.getUser(id);
    }

    @GetMapping(value = "/user")
    public User getByEmail(@RequestParam String email){
        return userService.getByEmail(email);
    }

}
