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

    if (isNaN(firstDivisor) || isNaN(secondDivisor) || isNaN(thirdDivisor) || isNaN(limit) || limit <= 0 ||
        firstDivisor <= 0 || secondDivisor <= 0 || thirdDivisor <= 0) {
        alert("Invalid input. Please enter positive numbers for all fields.");
        return;

        const firstDivisor = parseInt(document.getElementById('div1').value);
        const firstWord = document.getElementById('word1').value;

        const secondDivisor = parseInt(document.getElementById('div2').value);
        const secondWord = document.getElementById('word2').value;

        const thirdDivisor = parseInt(document.getElementById('div3').value);
        const thirdWord = document.getElementById('word3').value;

        const defaultWord = document.getElementById('defaultWord').value;
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
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        greeting();
    })
})