const { age, date, grade } = require('../../lib/utils');
const Student = require('../models/Student');

module.exports = {
  index(req, res) {
    let { page, limit } = req.query;
    
    page = page || 1;
    limit = limit || 2;

    const offset = limit * (page - 1);

    Student.pagination(limit, offset, function(students) {
      const pagination = {
        total: Math.ceil(students[0].total / limit),
        page
      }

      return res.render('students/index', { students, pagination });
    });
  },
  create(req, res) {
    Student.teacherSelectionOption(function(options) {
      return res.render('students/create', { teacherOptions: options });
    });
  },
  post(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] === "")
        return res.send('Please, fill all fields')
    }

    Student.create(req.body, function(student) {
      return res.redirect(`/students/${student.id}`);
    });
  },
  show(req, res) {
    Student.find(req.params.id, function(student) {
      if (!student) return res.send('Student not found!');

      student.age = age(student.birth);
      student.school_year = grade(student.school_year);

      return res.render('students/show', { student });
    });
  },
  edit(req, res) {
    Student.find(req.params.id, function(student) {
      if (!student) return res.send('Student not found!');

      student.birth = date(student.birth).iso;

      Student.teacherSelectionOption(function(options) {
        return res.render('students/edit', { student, teacherOptions: options });
      });
    });
  },
  put(req, res) {
    const keys = Object.keys(req.body);

    for (key of keys) {
      if (req.body[key] === "")
        return res.send('Please, fill all fields')
    }

    Student.update(req.body, function() {
      return res.redirect(`/students/${req.body.id}`);
    });
  },
  delete(req, res) {
    Student.delete(req.body.id, function() {
      return res.redirect('/students');
    });
  },
}
