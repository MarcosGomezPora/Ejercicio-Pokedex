const students = ['Tamara', 'Alejandro', 'Oriol', 'Joan', 'Marcos', 'Inma', 'Marcelo', 'Inmiculidi'];
const mappedStudents = students.map((student) => {
    console.log(student);
    const newStudent = {
        name: student,
        bootcamp: 'Full Stack Developer',
    }
    return newStudent;
});
console.log(mappedStudents);
const studentsNames = mappedStudents.map((student) => {
    return {
        ...student,
        nameLength: student.name.length,
    }
})
console.log(studentsNames);
const filteredStudents = studentsNames.filter((student) => { 
       return student.nameLength < 7 || !students.name.includes('a');
    }); 
console.log('Filtered Students');
console.log(filteredStudents);