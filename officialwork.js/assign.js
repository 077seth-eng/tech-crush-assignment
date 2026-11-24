let students = [
    {
        name: "John Silas",
        course: "English",
        score: 50
    },
    {
        name: "Emmanuel Cephas",
        course: "forensic science",
        score: 70
    },
    {
        name: "Michael Angelo",
        corse: "data manage",
        score: 40
    },
    {
        name: "Jedidiah Simon",
        course: "computer",
        score: 80
    },
    {
        name: "Salem Michael",
        course: "mobile develoment",
        score: 35
    },
    {
        name: "Judah Ruben",
        course: "mathematics",
        score: 90
    }
]

function studentwithpass(allstudents) {
    let passstudent = allstudents.filter((student) => {
        return student.score >= 50
    })
    console.log(passstudent)
}
studentwithpass(students)