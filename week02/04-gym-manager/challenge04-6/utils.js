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

    return `${year}-${month}-${day}`;
  }
}