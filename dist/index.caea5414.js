function e(e){return e&&e.__esModule?e.default:e}var t={};t=JSON.parse('[{"name":"George","surname":"Smith","age":19,"course":2,"section":"Science and Technology","signatories":["Maths","Computer Science","Physics","Chemistry"]},{"name":"Milana","surname":"Brown","age":21,"course":4,"section":"Human rights","signatories":["Laws","Economy","Philosophy","Psychology"]},{"name":"Thomas","surname":"Gates","age":18,"course":1,"section":"Art","signatories":["Architecture","Picture","French","Literature"]}]');const n=document.querySelector(".students");console.log("Students data:",e(t));const r=e=>{console.log("Filtered students:",e);let t=e.map(e=>`
        <tr>
            <td>${e.name}</td>
            <td>${e.surname}</td>
            <td>${e.age}</td>
            <td>${e.course}</td>
            <td>${e.section}</td>
            <td>
                <ul>
                    ${e.signatories.map(e=>`<li>${e}</li>`).join("")}
                </ul>
            </td>
        </tr>
    `).join("");0===e.length?n.innerHTML=`
            <tr>
                <td colspan="6">\u{41D}\u{456}\u{447}\u{43E}\u{433}\u{43E} \u{43D}\u{435} \u{437}\u{43D}\u{430}\u{439}\u{434}\u{435}\u{43D}\u{43E}</td>
            </tr>
        `:n.innerHTML=`
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Age</th>
                <th>Course</th>
                <th>Section</th>
                <th>Signatories</th>
            </tr>
            ${t}
        `},s=n=>{r(e(t).filter(e=>e.name.toLowerCase().includes(n.toLowerCase())))},o=n=>{r(e(t).filter(e=>e.surname.toLowerCase().includes(n.toLowerCase())))},u=n=>{r(e(t).filter(e=>e.section.toLowerCase().includes(n.toLowerCase())))};document.querySelector("#search-name").addEventListener("input",e=>{s(e.target.value)}),document.querySelector("#search-surname").addEventListener("input",e=>{o(e.target.value)}),document.querySelector("#search-section").addEventListener("input",e=>{u(e.target.value)}),r(e(t));
//# sourceMappingURL=index.caea5414.js.map
