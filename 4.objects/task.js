function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this["subject"] = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.unshift(mark);
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...mark) {
  this.marks = mark;
}

Student.prototype.getAverage = function () {
  let result = 0;
  this.marks.forEach((item) => result += item);
  return result / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this["excluded"] = reason;
}