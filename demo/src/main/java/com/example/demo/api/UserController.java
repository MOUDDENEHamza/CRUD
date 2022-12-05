package com.example.demo.api;

import com.example.demo.service.UserService;
import com.example.demo.vo.UserVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/findAll")
    public List<UserVO> findAll() {
        return userService.findAll();
    }

    @PostMapping(value = "/createUser")
    public void createUser(@RequestBody UserVO userVO) {
        userService.createUser(userVO);
    }

    @PutMapping(value = "/updateUser/{id}")
    public void updateUser(@PathVariable Long id, @RequestBody UserVO userVO) {
        userService.updateUser(id, userVO);
    }

    @DeleteMapping(value = "/deleteUser/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

}
