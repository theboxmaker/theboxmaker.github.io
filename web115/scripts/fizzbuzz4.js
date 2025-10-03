function checkDivision(num, divisor) {
    return num % divisor === 0;
}

function greeting() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const middleInitial = document.getElementById('middle_initial').value;

    let greetingMsg = `Welcome to Custom FizzBuzz, ${firstName}`;
    if (middleInitial !== "") {
        greetingMsg += " " + middleInitial + ".";
    }
    greetingMsg += " " + lastName + "!";

    document.getElementById("greeting").textContent = greetingMsg;

    const firstDivisor = parseInt(document.getElementById('div1').placeholder);
    const firstWord = document.getElementById('word1').placeholder;

    const secondDivisor = parseInt(document.getElementById('div2').placeholder);
    const secondWord = document.getElementById('word2').placeholder;

    const thirdDivisor = parseInt(document.getElementById('div3').placeholder);
    const thirdWord = document.getElementById('word3').placeholder;

    const defaultWord = document.getElementById('defaultWord').placeholder;
    const limit = parseInt(document.getElementById('total').value);

    const rules = [
        { divisor: firstDivisor, word: firstWord, className: "word1" },
        { divisor: secondDivisor, word: secondWord, className: "word2" },
        { divisor: thirdDivisor, word: thirdWord, className: "word3" }
    ];

    let output = "";

    for (let i = 1; i <= limit; i++) {
        let line = `${i}.) `;
        let words = [];

        rules.forEach((rule) => {
            if (checkDivision(i, rule.divisor)) {
                words.push(`<span class="${rule.className}">${rule.word}</span>`);
            }
        });

        if (words.length > 0) {
            line += words.join(" ");
        } else {
            line += defaultWord;
        }

        output += line + "<br>";
    }

    document.getElementById("numList").innerHTML = output;
}
