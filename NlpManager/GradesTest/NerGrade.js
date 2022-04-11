const { NlpManager } = require("node-nlp");

getEntities = (utterance) => {
  const manager = new NlpManager({ threshold: 0.8 });

  manager.addNamedEntityText(
    "examType",
    "final",
    ["en"],
    ["fianl", "fialn", "final"]
  );
  manager.addNamedEntityText(
    "examType",
    "midterm",
    ["en"],
    ["midterm", "Midterm", "medterm", "mid term"]
  );
  manager.addNamedEntityText(
    "Attendance",
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
    .extractEntities("en",utterance)
    .then((res) => console.log(res.entities));
};

module.exports = getEntities;
