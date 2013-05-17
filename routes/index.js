
/*
 * GET home page.
 */

exports.index = function (req, res) {
  res.render('index');
};

exports.test = function (req, res) {
  res.render('test');
};

/*
 * GET versus page
 * Adds the Champion data to the
 */

exports.versus = function (req, res) {
  res.render('versus');
};

exports.form = function (req, res) {
  res.render('form');
};
