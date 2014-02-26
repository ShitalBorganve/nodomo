// Routes file.
module.exports = function(app, passport, filters, controllers) {

 // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/', filters.isLoggedIn, function(req, res) { controllers.general.profile(req,res); });


  // =====================================
  // REGISTER ==============================
  // =====================================
  // show the signup form
  app.get('/register', function(req,res){ controllers.general.register(req,res); });

  // process the signup form
   
  app.post('/register', passport.authenticate('local-signup', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/register', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));


  // =====================================
  // LOGIN ===============================
  // =====================================
  // show the login form
  app.get('/login', function(req, res) { controllers.general.login(req,res); });


  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));


  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function(req, res){ controllers.general.logout(req,res); });


};