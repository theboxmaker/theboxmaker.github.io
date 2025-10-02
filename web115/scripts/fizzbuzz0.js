function greeting() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const middleInitial = document.getElementById('middle_initial').value;

    let greeting = `Welcome to TuckTech, ${firstName}`;

    if (middleInitial !== "") {
        greeting += " " + middleInitial + ".";
    }

    greeting += " " + lastName + "!";

    document.getElementById("greeting").textContent = greeting;

    let userNum = prompt(`How high would you like to count, ${firstName}?`);
    userNum = parseInt(userNum);

    if (!isNaN(userNum) && userNum > 0) {
        const loopMsg = "Tucker Technology";
        let loopRun = "";

        for ( i = 1; i <= userNum; i++ ) {
            if ( i % 2 === 0) {
                loopRun += `${i}.) ${loopMsg} - this number is even<br>`;
            } else {
                loopRun += `${i}.) ${loopMsg} - this number is odd<br>`;
            }
        }

        document.getElementById('loop').innerHTML = loopRun;
    } else {
        document.getElementById('loop').innerHTML = "<p>Please enter a valid positive number.</p>";
    }

}