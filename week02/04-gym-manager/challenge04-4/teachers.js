const fs = require('fs');

const data = require('./data.json');
const { age, graduation, date } = require('./utils');

// create
exports.post = function(req, res) {
  const keys = Object.keys(req.body);


  for (key of keys) {
    if (req.body[key] === '') {
      return res.send('Fill all the fields!');
    }
  }

  let { avatar_url, name, birth, educational_background, class_type, subjects } = req.body;
  console.log(avatar_url)
  birth = Date.parse(birth);
  const id = Number(data.teachers.length + 1);

  data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    educational_background,
    class_type,
    subjects,
    created_at: Date.now()
  });

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send('Error while writing file');

    return res.redirect('/teachers');
  });
};

// show
exports.show = function(req, res) {
  const { id } = req.params;

  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send('Teacher not found!');

  const teacher = {
    ...foundTeacher,
    age: age(foundTeacher.birth),
    graduation: graduation(foundTeacher.educational_background),
    subjects: foundTeacher.subjects.split(', '),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at)
  };

  return res.render('teachers/show', { teacher });
};

// edit
exports.edit = function(req, res) {
  const { id } = req.params;
  const foundTeacher = data.teachers.find(function(teacher) {
    return teacher.id == id;
  });

  if (!foundTeacher) return res.send('Teacher not found!');

  const teacher = {
    ...foundTeacher,
    birth: date(foundTeacher.birth)
  };

  return res.render('teachers/edit', { teacher });
}
