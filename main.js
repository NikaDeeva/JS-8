"use strict";
import students from './data.json';

const studentTable = document.querySelector('.students');

console.log("Students data:", students);

const showStudents = (filteredStudents) => {
    console.log("Filtered students:", filteredStudents);
    const rowsHTML = filteredStudents.map(student => `
        <tr>
            <td>${student.name}</td>
            <td>${student.surname}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>${student.section}</td>
            <td>
                <ul>
                    ${student.signatories.map(subject => `<li>${subject}</li>`).join('')}
                </ul>
            </td>
        </tr>
    `).join('');

    if (filteredStudents.length === 0) {
        studentTable.innerHTML = `
            <tr>
                <td colspan="6">Нічого не знайдено</td>
            </tr>
        `;
    } else {
        studentTable.innerHTML = `
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Course</th>
                <th>Section</th>
                <th>Signatories</th>
            </tr>
            ${rowsHTML}
        `;
    }
};

const filterByName = (query) => {
    const filtered = students.filter(student =>
        student.name.toLowerCase().includes(query.toLowerCase())
    );
    showStudents(filtered);
};

const filterBySurname = (query) => {
    const filtered = students.filter(student =>
        student.surname.toLowerCase().includes(query.toLowerCase())
    );
    showStudents(filtered);
};

const filterBySection = (query) => {
    const filtered = students.filter(student =>
        student.section.toLowerCase().includes(query.toLowerCase())
    );
    showStudents(filtered);
};
document.querySelector('#search-name').addEventListener('input', (e) => {
    filterByName(e.target.value);
});

document.querySelector('#search-surname').addEventListener('input', (e) => {
    filterBySurname(e.target.value);
});

document.querySelector('#search-section').addEventListener('input', (e) => {
    filterBySection(e.target.value);
});
showStudents(students);

