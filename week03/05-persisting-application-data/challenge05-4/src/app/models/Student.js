const db = require('../../config/db');
const { date } = require('../../lib/utils');

module.exports = {
  all(callback) {
    db.query('SELECT * FROM student', function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },
  create(data, callback) {
    const query = `
      INSERT INTO student (
        avatar_url,
        name,
        email,
        birth,
        school_year,
        hpw,
        teacher_id,
        created_at
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id
    `;

    const values = [
      data.avatar_url,
      data.name,
      data.email,
      date(data.birth).iso,
      data.school_year,
      data.hpw,
      data.teacher,
      date(Date.now()).iso,
    ];

    db.query(query, values, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },
  find(id, callback) {
    db.query(`
      SELECT student.*, teacher.name as teacher_name
      FROM student
      LEFT JOIN teacher ON (student.teacher_id = teacher.id)
      WHERE student.id = $1`, [id], function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows[0]);
    });
  },
  update(data, callback) {
    const query = `
      UPDATE student
      SET
        avatar_url = $1,
        name = $2,
        email = $3,
        birth = $4,
        school_year = $5,
        hpw = $6,
        teacher_id = $7
      WHERE id = $8
    `;

    const values = [
      data.avatar_url,
      data.name,
      data.email,
      date(data.birth).iso,
      data.school_year,
      data.hpw,
      data.teacher,
      data.id
    ];

    db.query(query, values, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback();
    });
  },
  delete(id, callback) {
    db.query(`DELETE FROM student WHERE id = $1`, [id], function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback();
    });
  },
  teacherSelectionOption(callback) {
    db.query(`SELECT id, name FROM teacher`, function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  },
  pagination(limit, offset, callback) {
    let query = `
      SELECT *, (SELECT count(*) FROM student) AS total
      FROM student
      LIMIT $1 OFFSET $2;
    `;

    db.query(query, [limit, offset], function(err, results) {
      if (err) throw `Database error! ${err}`;

      callback(results.rows);
    });
  }
};
