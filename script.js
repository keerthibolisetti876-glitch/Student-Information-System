// SHOW REGISTRATION FORM

function showRegistration() {

    let form = document.getElementById("registration");

    form.classList.remove("hidden");

    form.scrollIntoView({
        behavior: "smooth"
    });
}


// REGISTER STUDENT

function registerStudent(event) {

    event.preventDefault();

    let name =
        document.getElementById("studentName").value;

    let course =
        document.getElementById("course").value;

    let year =
        document.getElementById("year").value;

    let table =
        document.getElementById("studentTable");

    let studentNumber =
        table.rows.length + 1;

    let newRow =
        table.insertRow();

    newRow.innerHTML = `
        <td>STU00${studentNumber}</td>

        <td>${name}</td>

        <td>${course}</td>

        <td>${year}</td>

        <td>New</td>

        <td>
            <span class="active">
                Active
            </span>
        </td>
    `;

    alert("Student registered successfully!");

    document.getElementById("studentName").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("year").value = "";
    document.getElementById("address").value = "";

    updateStudentCount();
}


// SEARCH STUDENTS

function searchStudents() {

    let search =
        document
        .getElementById("search")
        .value
        .toLowerCase();

    let rows =
        document
        .getElementById("studentTable")
        .getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        let rowText =
            rows[i].innerText.toLowerCase();

        if (rowText.includes(search)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";
        }
    }
}


// UPDATE STUDENT COUNT

function updateStudentCount() {

    let rows =
        document
        .getElementById("studentTable")
        .getElementsByTagName("tr");

    document.getElementById("totalStudents").innerText =
        rows.length;

    document.getElementById("activeStudents").innerText =
        rows.length;
}


// REPORT

function generateReport(type) {

    alert(
        type +
        " report generated successfully!"
    );
}


// LOGIN

function login() {

    alert(
        "Login system is available for demonstration."
    );
}