//Sempre iniciar o servidor com comando no terminal --> node index.js
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const { upload } = require("./controllers/upload.js");

const app = express(); //criado servidor
const port = 3001; //definido porta de atuacao do servidor

app.use(express.static("public")); //deixa o diretório visível para a internet
app.use(cors()); //adicionado filtro cors
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json()); //dito qual tipo de arquivo que sera trabalhado (API RestFul usa json)
app.use(fileUpload({ createParentPath: true }));

//upload imagens
app.post("/upload", upload);

app.listen(port, () => console.log(`Servidor inicializado na porta ${port}`));
