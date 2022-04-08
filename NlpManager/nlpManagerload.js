const {NlpManager} = require('node-nlp')

var clg = console.log.bind(console);
const manager = new NlpManager();
manager.load();

let questArr = ["Hi","How are You","Tell me a fact about chuck Norris"]

var promises = questArr.map(async (question)=>{ 
    manager.process('en',question)
    .then(res => {
       // clg(res.answer)
        return res.answer})
})
Promise.all(promises).then((res)=>clg(`Responses Array : ${res}`));