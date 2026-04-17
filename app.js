function analyze() {
    const pattern = document.getElementById("pattern").value;
    const lines = document.getElementById("inputStrings").value.split("\n");
    const resultBox = document.getElementById("resultBox");

    resultBox.innerHTML = "";

    if (!pattern) {
        resultBox.innerHTML = "⚠ Please enter a regex pattern";
        return;
    }

    let regex;

    try {
        regex = new RegExp(pattern);
    } catch (e) {
        resultBox.innerHTML = "❌ Invalid Regular Expression";
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

function explainRegex() {
    const pattern = document.getElementById("pattern").value;
    const explainBox = document.getElementById("explainText");

    if (!pattern) {
        explainBox.innerText = "Enter a regex to see explanation...";
        return;
    }

    let explanation = pattern;

    explanation = explanation
        .replace(/\^/g, "Start of string, then ")
        .replace(/\$/g, " then End of string")
        .replace(/\*/g, " (zero or more times)")
        .replace(/\+/g, " (one or more times)")
        .replace(/\./g, " any character ")
        .replace(/\|/g, " OR ");

    explainBox.innerText = explanation;
}

function loadExample() {
    document.getElementById("pattern").value = "^a*b$";
    document.getElementById("inputStrings").value =
        "b\nab\naaab\naabbb";

    explainRegex();
}
function showTheory(topic) {
    const content = document.getElementById("theoryContent");

    if (topic === "intro") {
        content.innerHTML = `
        A regular expression is a pattern used to describe a set of strings.
        It is widely used in pattern matching, compilers, and text processing.
        `;
    }

    else if (topic === "language") {
        content.innerHTML = `
        A regular language is a set of strings that can be represented using
        regular expressions or finite automata (DFA/NFA).
        `;
    }

    else if (topic === "automata") {
        content.innerHTML = `
        Every regular expression can be converted into an NFA,
        and every NFA can be converted into a DFA.
        All of them define the same class of languages.
        `;
    }

    else if (topic === "symbols") {
        content.innerHTML = `
        * → zero or more occurrences <br>
        + → one or more occurrences <br>
        | → OR operation <br>
        ^ → start of string <br>
        $ → end of string
        `;
    }
}