const { NlpManager} = require("node-nlp");
const getEntities = require("./NerGrade")

const manager = new NlpManager({ languages: ["en"], forceNER: true });

// Train and save th e model.
(async () => {
  manager.addCorpus("./../../corpus.json");
  await manager.train();
  manager.save();
  utterance = "Can I get my midterm grade for the course cs350";
  response = await manager.process("en",utterance);
  getEntities(utterance);
  console.log(response);
})();
