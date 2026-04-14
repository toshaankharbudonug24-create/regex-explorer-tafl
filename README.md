The application uses JavaScript’s `RegExp` engine to evaluate patterns. When a user enters a regular expression, it is compiled and applied to each input string. The system then determines whether each string matches the pattern.

Conceptually, this reflects how a **finite automaton** processes strings:

* The regular expression defines a language
* Each string is an input
* The result shows acceptance or rejection
