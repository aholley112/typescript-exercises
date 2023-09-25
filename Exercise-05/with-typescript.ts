class Student {
     // Define the properties here
    studentName: string;
    studentAge: number;
    studentGrade: number;

    // Define the constructor here
    constructor(name: string, age: number, grade: number) {
        this.studentName = name;
        this.studentAge = age;
        this.studentGrade = grade;
    }

    // Define the displayInfo method here
    displayInfo(): void {
        console.log(`Student Name: ${this.studentName}`);
        console.log(`Student Age: ${this.studentAge}`);
        console.log(`Student Grade: ${this.studentGrade}`);
    }
    // Define the isPassing method here
    isPassing(gradeThreshold: number): boolean {
        return this.studentGrade >= gradeThreshold;
    }
}

// Instantiate a new student object and call the methods to test your class
const student1 = new Student("Amanda", 34, 90);

student1.displayInfo(); // Display student information
const isPassing = student1.isPassing(60); // Check if the student is passing
console.log(`Is the student passing? ${isPassing}`);
