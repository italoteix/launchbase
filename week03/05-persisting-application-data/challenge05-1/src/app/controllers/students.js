const { age, date } = require('../../lib/utils');

module.exports = {
  index(req, res) {
    return res.render('students/index');
  },
  create(req, res) {
    return res.render('students/create');
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] === "")
        return res.send('Please, fill all fiels')
    }
  },
  show(req, res) {},
  edit(req, res) {},
  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] === "")
        return res.send('Please, fill all fiels')
    }
  },
  delete(req, res) {},
}
