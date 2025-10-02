function greeting() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const middleInitial = document.getElementById('middle_initial').value;

    let greeting = `Welcome to TuckTech ${firstName}`;

    if (middleInitial !== "") {
        greeting += " " + middleInitial + ".";
    }

    greeting += " " + lastName + "!";

    document.getElementById("greeting").textContent = greeting;
}