//this inheritance is OOP

class Course{
    constructor(courseTitle, instructor){
        this.courseTitle = courseTitle
        this.instructor = instructor
    }
    teaches(){
        console.log(`${this.instructor} teaches ${this.courseTitle}`)
    }
}

//create a derived class from the parent class using the extends keyword .
//so that it can inherit from the parent class

class StudentCourse extends Course{
    constructor(courseTitle, instructor, studentName){
        super(courseTitle, instructor)
        this.studentName = studentName
    }

    studies(){
        console.log(`${this.studentName} studies ${this.courseTitle}`)
    }
}

//create an instance for the class

const anatomy = new  StudentCourse('Anatomy', 'Selamawit','Martiye')
anatomy.teaches()
anatomy.studies()