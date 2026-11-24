let students = [
    {
        name: "Dan joshua",
        course: "Forensic science",
        score: 75
    },
    {
        name: "Mike Cosi",
        course: "computer",
        score: 80
    },
    {
        name: "victor Moses",
        course: "mobile development",
        score: 45
    },
    {
        name: "Emmanuel joses",
        course: "Mathematcs",
        score: 37
    },
    {
        name: "Eli Mikel",
        courses: "data management",
        score: 85
    }
]

function studentsWithPass(allstudents){
    let passstudents = [];

    for (let A = 0; A < allstudents.length; A++){
        if (allstudents[A].score >= 50){
            passstudents.push(allstudents[A])
        }
    }
    console.log(passstudents)
}

studetswithpass(students)