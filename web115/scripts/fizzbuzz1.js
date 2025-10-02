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
    const rules = [
        { divisor: 3, word: "WELCOME" },
        { divisor: 5, word: "GREETINGS" }
    ];
    const defaultPhrases = [
        "Hello!", "Salutations", "Howdy!"
    ];

    let output = "";

    for (let i = 1; i <= limit; i++) {
        let line = `${i}.) `;
        let words = []

        rules.forEach(rule => {
            if (i % rule.divisor === 0) {
                words.push(rule.word);
            }
        });

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