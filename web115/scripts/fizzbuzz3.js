function checkDivison(num, divisor) {
    return num % divisor === 0;
}

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

    let limit = 140;
    const firstDivisor = 4;
    const secondDivisor = 6;
    const thirdDivisor = 8;

    const rules = [
        { divisor: firstDivisor, word: "WELCOME", className: "first-div" },
        { divisor: secondDivisor, word: "GREETINGS", className: "second-div"},
        { divisor: thirdDivisor, word: "HEY", className: "third-div"}
    ];

    const defaultPhrases = [
        "Hello!", "Salutations", "Howdy!"
    ];

    let output = "";

    for (let i = 1; i <= limit; i++) {
        let line = `${i}.) `;
        let words = [];

        rules.forEach((rule) => {
            if (checkDivison(i, rule.divisor)) {
                words.push(`<span class="${rule.className}"> ${rule.word}</span>`)
        }});


        if (words.length > 0) {
            line += words.join(" ");
        } else {
            const phrase = defaultPhrases[(i - 1) % defaultPhrases.length];
            line += phrase;
        }

        output += line + "<br>";
    }

    document.getElementById("numList").innerHTML = output;
}