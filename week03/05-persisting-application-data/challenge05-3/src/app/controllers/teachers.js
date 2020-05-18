const { age, date, graduation } = require('../../lib/utils');
const Teacher = require('../models/Teacher');

module.exports = {
  index(req, res) {
    const { filter } = req.query;

    if (filter) {
      Teacher.findBy(filter, function(teachers) {

        for (teacher of teachers) {
          teacher.subjects = teacher.subjects_taught.split(', ');
        }
  
        return res.render('teachers/index', { teachers });
      });
    } else {
      Teacher.all(function(teachers) {
  
        for (teacher of teachers) {
          teacher.subjects = teacher.subjects_taught.split(', ');
        }
  
        return res.render('teachers/index', { teachers });
      });
    }
  },
  create(req, res) {
    return res.render('teachers/create');
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] === "")
        return res.send('Please, fill all fields')
    }

    Teacher.create(req.body, function(teacher) {
      return res.redirect(`/teachers/${teacher.id}`);
    });
  },
  show(req, res) {
    Teacher.find(req.params.id, function(teacher) {
      if (!teacher) return res.send('Teacher not found!');

      teacher.age = age(teacher.birth_date);
      teacher.graduation = graduation(teacher.education_level);
      teacher.subjects = teacher.subjects_taught.split(', ');
      teacher.created_at = new Intl.DateTimeFormat('pt-BR').format(teacher.created_at);

      return res.render('teachers/show', { teacher });
    });
  },
  edit(req, res) {
    Teacher.find(req.params.id, function(teacher) {
      if (!teacher) return res.send('Teacher not found!');

      teacher.birth = date(teacher.birth_date).iso;
      teacher.subjects = teacher.subjects_taught;
      teacher.educational_background = teacher.education_level;

      return res.render('teachers/edit', { teacher });
    });
  },
  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] === "")
        return res.send('Please, fill all fields')
    }

    Teacher.update(req.body, function() {
      return res.redirect(`/teachers/${req.body.id}`);
    });
  },
  delete(req, res) {
    Teacher.delete(req.body.id, function() {
      return res.redirect('/teachers');
    });
  },
}
