package models;

public class User {
	public Integer id;
	public String name;
	public String phone;
	public String addr;
	public String duty;
	
	public User clone(){
		User u = new User();
		u.id = id;
		u.name = name;
		u.phone = phone;
		u.addr = addr;
		u.duty = duty;
		return u;
	}
}
