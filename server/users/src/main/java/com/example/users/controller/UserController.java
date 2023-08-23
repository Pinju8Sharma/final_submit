package com.example.users.controller;

import com.example.users.model.User;
import com.example.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();

    }
    @RequestMapping(method = RequestMethod.POST,value = "/users")
    public User createUser(@RequestBody User user){

        return userService.createUser(user);
    }
}
