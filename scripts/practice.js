const studentGrade = (student) => {
  if(student.grade > 60) {
    student.pass = true
  }else {
    student.pass = false
  }
}

const ruby = {
  name: "Ruby",
  grade: 90
}

const sally = {
  name: "Sally",
  grade: 55
}

const studentGradeRuby = studentGrade(ruby)
const studentGradeSally = studentGrade(sally)

//What is ruby.pass?
//What is sally.pass?