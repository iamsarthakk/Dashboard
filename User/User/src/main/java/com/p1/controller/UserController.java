package com.p1.controller;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.p1.entity.User;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	JdbcTemplate template;    
	
    public UserController() {
    	 this.template = null;
    }
    public UserController(JdbcTemplate template) {
    	 this.template = template;    
	}

	@GetMapping("/users")
    public List<User> getUsers() {
		 return template.query("select * from user",new RowMapper<User>()
		    {    
		        public User mapRow(ResultSet rs, int row) throws SQLException 
		        {    
		        	User e=new User();    
		            e.setId(rs.getInt(1));    
		            e.setName(rs.getString(2));    
		           e.setEmail(rs.getString(3));
		            return e;    
		        }    
		    }
		    );    
	}  
	

	@GetMapping("/users/{id}")
    public User getUserbyId(@PathVariable Long id) {
		 String sql = "SELECT * FROM user WHERE ID = ?";
		 System.out.println("ID is "+ id);
		 return template.queryForObject(sql, new UserMapper(), 
				    id);
	       
	}  
    @PostMapping("/users")
    void addUser(@RequestBody User p) {
    	template.update("insert into user(name,email) values(?, ?)", p.getName(), p.getEmail());
    }
    

    /* It updates user object. */    
    @PostMapping("/editsave")    
    public void editsave(@RequestBody User p){    
    	System.out.println("Enter Edit");
    	System.out.println(p);
    	template.update("update user set name=?, email=? where id=?", p.getName(), p.getEmail(), p.getId());
           
    }    
    /* It deletes record for the given id in URL  */    
    @GetMapping("/deleteuser/{id}")    
    public String delete(@PathVariable Long id){    
	    template.update("delete from user where id=?", id);    
        return "Data Deleted Succefully";
    }     
    private static final class UserMapper implements RowMapper<User> {
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        	User emp = new User();
          emp.setId(rs.getLong("id"));
          emp.setName(rs.getString("name"));
          emp.setEmail(rs.getString("email"));
          return emp;
        }
      }  
}