
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home Page' });
  console.log('INFOS:: user connected on Home page !');
};