document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("fizzbuzzForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    runFizzBuzz();
  });
});

function checkDivision(num, divisor) {
  return num % divisor === 0;
}

function runFizzBuzz() {
  const firstName = document.getElementById('first_name').value.trim();
  const lastName = document.getElementById('last_name').value.trim();
  const middleInitial = document.getElementById('middle_initial').value.trim();

  let greetingMsg = `Welcome to TuckTech, ${firstName}`;
  if (middleInitial !== "") greetingMsg += ` ${middleInitial}.`;
  greetingMsg += ` ${lastName}!`;
  document.getElementById("greeting").textContent = greetingMsg;

  const d1 = parseInt(document.getElementById('div1').value, 10);
  const d2 = parseInt(document.getElementById('div2').value, 10);
  const d3 = parseInt(document.getElementById('div3').value, 10);

  const w1 = document.getElementById('word1').value.trim();
  const w2 = document.getElementById('word2').value.trim();
  const w3 = document.getElementById('word3').value.trim();

  const defaultWord = document.getElementById('defaultWord').value;
  let limit = parseInt(document.getElementById('total').value, 10);

  const outEl = document.getElementById('numList');

  if (Number.isNaN(limit) || limit < 1) {
    limit = 125; 
  }
  if ([d1, d2, d3].some(d => Number.isNaN(d) || d < 1)) {
    outEl.innerHTML = 'Please enter valid positive divisors (>= 1) for all three divisors.';
    return;
  }

  if ([w1, w2, w3].some(w => w.includes(' '))) {
    outEl.innerHTML = 'Please use a single word (no spaces) for each of the three replacement-word fields.';
    return;
  }

  const rules = [
    { divisor: d1, word: w1, className: "word1" },
    { divisor: d2, word: w2, className: "word2" },
    { divisor: d3, word: w3, className: "word3" }
  ];

  let output = '';
  for (let i = 1; i <= limit; i++) {
    let line = `${i}.) `;
    const words = [];

    rules.forEach(rule => {
      if (checkDivision(i, rule.divisor) && rule.word !== "") {
        words.push(`<span class="${rule.className}">${escapeHtml(rule.word)}</span>`);
      }
    });

    if (words.length > 0) {
      line += words.join(' ');
    } else {
      line += escapeHtml(defaultWord);
    }

    output += line + '<br>';
  }

  outEl.innerHTML = output;
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
