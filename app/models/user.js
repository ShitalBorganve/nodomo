/*
*	Model User
*/
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
	//var passportLocalMongoose = require('passport-local-mongoose');


// define the schema for our user model
var userSchema = mongoose.Schema({
		local            : {
        	email        : String,
        	password     : String,
    		firstname : String ,
			lastname : String,
			phone : String,
			picture : String
    }
});

// methods ======================
// generating picture route
userSchema.methods.generatePicture = function(firstname,lastname) {
    return './img_users/'+ firstname +'-'+ lastname +'_picture.png';
};

// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

//User.plugin(passportLocalMongoose);
// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);