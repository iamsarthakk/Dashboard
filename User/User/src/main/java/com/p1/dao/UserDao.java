package com.p1.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.p1.entity.User;


public class UserDao {
	JdbcTemplate template;    
    
	public void setTemplate(JdbcTemplate template) {    
	    this.template = template;    
	}    
	public int save(User p){    
	    String sql="insert into user(name,email) values('"+p.getName()+"',"+p.getEmail()+"')";    
	    return template.update(sql);    
	}    
	public int update(User p){    
	    String sql="update user set name='"+p.getName()+"', email="+p.getEmail()+"' where id="+p.getId()+"";    
	    return template.update(sql);    
	}    
	public int delete(int id){    
	    String sql="delete from Emp99 where id="+id+"";    
	    return template.update(sql);    
	}    
	public User getUserById(int id){    
	    String sql="select * from user where id=?";    
	    return template.queryForObject(sql, new Object[]{id},new BeanPropertyRowMapper<User>(User.class));    
	}  

	public List<User> getUsers()
	{    
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
}
