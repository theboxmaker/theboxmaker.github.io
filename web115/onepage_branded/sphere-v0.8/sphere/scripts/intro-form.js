document.getElementById("introForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const middleInitial = document.getElementById("middleInitial").value;
    const lastName = document.getElementById("lastName").value;
    const statement = document.getElementById("statement").value;

    const interest1 = document.getElementById("interest1").value;
    const interest2 = document.getElementById("interest2").value;
    const interest3 = document.getElementById("interest3").value;

    const course1 = document.getElementById("course1").value;
    const course2 = document.getElementById("course2").value;
    const course3 = document.getElementById("course3").value;
    const course4 = document.getElementById("course4").value;
    const course5 = document.getElementById("course5").value;
    const course6 = document.getElementById("course6").value;

    const outputHTML = `
        <h3>Form Submission Summary</h3>
        <p><strong>Name:</strong> ${firstName} ${middleInitial ? middleInitial + "." : ""} ${lastName}</p>
        <p><strong>Introduction:</strong> ${statement}</p>
        <h4>Hobbies / Interests:</h4>
        <ul>
            <li>${interest1}</li>
            <li>${interest2}</li>
            <li>${interest3}</li>
        </ul>
        <h4>Courses Taking:</h4>
        <ol>
            <li>${course1}</li>
            <li>${course2}</li>
            <li>${course3}</li>
            <li>${course4}</li>
            <li>${course5}</li>
            <li>${course6}</li>
        </ol>
    `;

    document.getElementById("form-output-area").innerHTML = outputHTML;
});