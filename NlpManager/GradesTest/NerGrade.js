const { NlpManager } = require("node-nlp");

const manager = new NlpManager({ threshold: 0.8 });

manager.addNamedEntityText(
  "function",
  "grade",
  ["en"],
  ["grade", "garde", "midterm", "final"]
);
manager.addNamedEntityText(
  "function",
  "attendance",
  ["en"],
  ["attendance", "attendence", "attndence", "absence", "absences", "abcnese"]
);
manager.addRegexEntity(
  "courseCode",
  "en",
  /[A-Za-z]+[A-Za-z]+[A-Za-z]+[0-9]+[0-9]|[A-Za-z]+[A-Za-z]+[0-9]+[0-9]/
);

manager
  .extractEntities("en", "What is my grade in the CS350 final exam")
  .then((res) => console.log(res.entities));
