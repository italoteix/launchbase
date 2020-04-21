const fs = require('fs');

const data = require('./data.json');

exports.post = function(req, res) {
  const keys = Object.keys(req.body);


  for (key of keys) {
    if (req.body[key] === '') {
      return res.send('Fill all the fields!');
    }
  }

  let { avatar_url, name, birth, educational_background, class_type, subjects } = req.body;

  birth = Date.parse(birth);
  const id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    educational_background,
    class_type,
    subjects
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Error while writing file');

    return res.redirect('/teachers');
  });
}
