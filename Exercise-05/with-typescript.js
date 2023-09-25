var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }
    Student.prototype.displayInfo = function () {
        console.log("Student Name: ".concat(this.studentName));
        console.log("Student Age: ".concat(this.studentAge));
        console.log("Student Grade: ".concat(this.studentGrade));
    };
    Student.prototype.isPassing = function (gradeThreshold) {
        return this.studentGrade >= gradeThreshold;
    };
    return Student;
}());
// Instantiate a new student object and call the methods to test your class
var student1 = new Student("Amanda", 34, 90);
student1.displayInfo(); // Display student information
var isPassing = student1.isPassing(60); // Check if the student is passing
console.log("Is the student passing? ".concat(isPassing));
