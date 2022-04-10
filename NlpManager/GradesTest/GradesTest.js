const { NlpManager, ConversationContext } = require("node-nlp");

const manager = new NlpManager({ languages: ["en"], forceNER: true });

// Train and save th e model.
(async () => {
  manager.addCorpus("./../../corpus.json");
  await manager.train();
  manager.save();
  response = await manager.process("en", "Can I get my grade");
  console.log(response);
})();
