function analyze() {
    const pattern = document.getElementById("pattern").value;
    const lines = document.getElementById("inputStrings").value.split("\n");
    const resultBox = document.getElementById("resultBox");

    resultBox.innerHTML = "";

    let regex;

    try {
        regex = new RegExp(pattern);
    } catch {
        resultBox.innerHTML = "Invalid Regex";
        return;
    }

    lines.forEach(line => {
        const div = document.createElement("div");
        div.classList.add("result");

        const match = line.match(regex);

        if (match) {
            div.classList.add("pass");

            let highlighted = line.replace(
                match[0],
                `<span class="highlight">${match[0]}</span>`
            );

            div.innerHTML = `✔ ${highlighted}`;
        } else {
            div.classList.add("fail");
            div.innerHTML = `✖ ${line}`;
        }

        resultBox.appendChild(div);
    });
}

// PALETTE
function insertSymbol(symbol) {
    const input = document.getElementById("pattern");
    input.value += symbol;
}

// SAMPLE STRING GENERATION (heuristic)
function generateStrings() {
    const pattern = document.getElementById("pattern").value;
    const resultBox = document.getElementById("resultBox");

    resultBox.innerHTML = "<h4>Generated Strings (Approx):</h4>";

    let samples = [];

    if (pattern.includes("a*") && pattern.includes("b")) {
        samples = ["b", "ab", "aaab"];
    } else if (pattern.includes("\\d")) {
        samples = ["1", "123", "4567"];
    } else if (pattern.includes("|")) {
        const parts = pattern.split("|");
        samples = parts.map(p => p.replace(/[^a-z]/gi, ""));
    } else {
        samples = ["test", "example", "sample"];
    }

    samples.forEach(s => {
        const div = document.createElement("div");
        div.innerText = s;
        resultBox.appendChild(div);
    });
}

// LOAD EXAMPLE
function loadExample() {
    document.getElementById("pattern").value = "^a*b$";
    document.getElementById("inputStrings").value =
        "b\nab\naaab\naabbb";
}

// EQUIVALENCE
function checkEquivalence() {
    const r1 = new RegExp(document.getElementById("regex1").value);
    const r2 = new RegExp(document.getElementById("regex2").value);

    const testStrings = ["", "a", "b", "ab", "aaab", "bbb"];
    let equivalent = true;

    for (let str of testStrings) {
        if (r1.test(str) !== r2.test(str)) {
            equivalent = false;
            break;
        }
    }

    document.getElementById("equivResult").innerText =
        equivalent ? "Equivalent for tested cases" : "Not Equivalent";
}

// THEORY PANEL
function showTheory(topic) {
    const content = document.getElementById("theoryContent");

    if (topic === "intro") {
        content.innerHTML = "A regular expression defines a pattern used to describe a set of strings.";
    } else if (topic === "language") {
        content.innerHTML = "A regular language is a set of strings accepted by a finite automaton.";
    } else if (topic === "automata") {
        content.innerHTML = "Regex → NFA → DFA → same language.";
    } else if (topic === "symbols") {
        content.innerHTML = "* = zero or more, + = one or more, | = OR, ^ = start, $ = end.";
    }
}