module.exports = {
  age: function(timestamp) {
    const date = new Date();
    const birthDate = new Date(timestamp);

    let age = date.getFullYear() - birthDate.getFullYear();
    const month = date.getMonth() - birthDate.getMonth();

    if (month < 0 || month === 0 && date.getDate() - birthDate.getDate() < 0) age--;

    return age;
  },
  graduation: function(value) {
    switch (value) {
      case 'high':
        return 'High School';
      case 'college':
        return 'College';
      case 'master':
        return 'Master Degree';
      case 'doctor':
        return 'Doctorate Degree';
    }
  },
  date: function(timestamp) {
    const date = new Date(timestamp);

    const year = date.getUTCFullYear();
    const month = `0${date.getUTCMonth() + 1}`.slice(-2);
    const day = `0${date.getUTCDate()}`.slice(-2);

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`
    };
  },
  grade: function(value) {
    switch (value) {
      case '5':
        return '5th year';
      case '6':
        return '6th year';
      case '7':
        return '7th year';
      case '8':
        return '8th year';
      case '9':
        return '9th year';
      case '1HS':
        return '1st High School';
      case '2HS':
        return '2nd High School';
      case '3HS':
        return '3rd High School';
    }
  }
}