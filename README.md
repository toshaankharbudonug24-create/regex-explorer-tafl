# Regular Expression Explorer

## Overview

This project is an interactive web-based tool developed for the course *Theory of Automata and Formal Languages (TAFL)*. It demonstrates how regular expressions define languages and how strings are accepted or rejected based on those patterns.

---

## Features

### Regular Expression Input

Users can enter custom regular expressions to define a language.

### Regex Construction Palette

Provides quick-insert buttons (*, +, |, ^, $) to simplify regex creation.

### String Testing and Visualization

* Allows testing of multiple input strings
* Displays whether each string is accepted or rejected
* Highlights the matching portion of accepted strings

### Sample String Generation

Generates representative strings based on the input regular expression using a heuristic approach.

### Regex Equivalence Checker

Compares two regular expressions using sample-based testing to determine whether they behave similarly.

### Theory Panel

Includes conceptual explanations of:

* Regular expressions
* Regular languages
* Relationship between regex and finite automata
* Common regex symbols

---

## Conceptual Basis

The project demonstrates the connection between:

* Regular expressions and regular languages
* Finite automata (DFA/NFA) and language recognition
* Practical pattern matching and theoretical models

---

## How It Works

1. The user inputs a regular expression
2. The system compiles it using JavaScript’s `RegExp`
3. Input strings are evaluated against the pattern
4. Results are displayed with visual feedback

---

## Limitations

* String generation is heuristic-based and not exhaustive
* Equivalence checking is approximate and based on sample testing
* Does not include graphical visualization of DFA or NFA

---

## Future Scope

* Conversion of regular expressions to DFA/NFA
* Step-by-step string matching simulation
* Improved equivalence checking using automata-based methods

---

## Course Context

This project was developed as part of Continuous Assessment for the course *Theory of Automata and Formal Languages*.

---

## Author

Toshaan Kharbudon
2024UCS1518

---
