const express = require('express');
const mongoose = require('mongoose')
let app = express();
const uri = "mongodb+srv://etinho:etinho1206@cluster0.ckfcf.mongodb.net/chat?retryWrites=true&w=majority"
app.use(express.static(__dirname));

mongoose.connect(uri,{ useNewUrlParser:true}).then(()=> {
    console.log("Conectado com sucesso")
  }).catch((err)=>{
    console.log("Houve um erro ao se conectar no banco"+err)
  })






let server = app.listen(3002, () => {
    console.log('server is running on port', server.address().port);
});