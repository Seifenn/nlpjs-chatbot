const { NlpManager } = require("node-nlp");
const axios = require("axios");

const manager = new NlpManager({ languages: ["en"], forceNER: true });

// Load pretrained model
(async () => {
  manager.load();
  response = await manager.process("en", "Chuck Norris");
  console.log(response);
  onIntent(response).then((res) => console.log(`The answer is : ${res}`));
})();

async function onIntent(res) {
  if (res.intent === "joke.chucknorris") {
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
