const { NlpManager } = require("node-nlp");
const axios = require("axios");

const manager = new NlpManager({ languages: ["en"], forceNER: true });

// Train and save the model.
(async () => {
 const manager = new NlpManager();
 manager.load();
//   manager.addCorpus("./../corpus.json");
//   await manager.train();
//   manager.save();
  response = await manager.process("en", "Chuck Norris");
  onIntent(response).then((res) => console.log(`The answer is : ${res}`));
})();

async function onIntent(res) {
  //  console.log(res.intent)
  if (res.intent === "joke.chucknorris") {
    //    console.log(GetMyChuckNoJoke())
    return GetMyChuckNoJoke().then((res) => res);
  }
}

GetMyChuckNoJoke = async () => {
  return axios
    .get("http://api.icndb.com/jokes/random")
    .then((resp) => resp.data.value.joke)
    .catch((err) => {
      console.error(err);
    });
};
