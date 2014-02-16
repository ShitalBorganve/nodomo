function User(id, firstname, lastname, mail, phone, password) {
	
	
	var id = id;
	var password = password;

	var firstname = firstname;
	var lastname = lastname;
	var mail = mail;
	var phone = phone;
	var picture = './img_users/'+ firstname +'-'+ lastname +'_picture.png';


	this.getid = function(){ return id; }
	this.getfirstname = function(){ return firstname; }
	this.getlastname = function(){ return lastname; }
	this.getmail = function(){ return mail; }
	this.getphone = function(){ return phone; }
	this.getpicture = function(){ return picture; }

	this.setfirstname = function(new_firstname){ firstname = new_firstname; }
	this.setlastname = function(new_lastname){ lastname = new_lastname; }
	this.setmail = function(new_mail){ mail = new_mail; }
	this.setphone = function(new_phone){ phone = new_phone; }
}
module.exports = User;

