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

        if (regex.test(line)) {
            div.classList.add("pass");
            div.innerHTML = `✔ "${line}" matches`;
        } else {
            div.classList.add("fail");
            div.innerHTML = `✖ "${line}" does not match`;
        }

        resultBox.appendChild(div);
    });
    function loadExample() {
    document.getElementById("pattern").value = "^a*b$";
    document.getElementById("inputStrings").value = "b\nab\naaab\naabbb";
}
}