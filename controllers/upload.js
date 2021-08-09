function upload(req, res) {
    try {
        if (!req.files) {
            res.status(400).send({ erro: "Nenhum arquivo encontrado" });
        } else {
            //simulando um atraso para que eu possa "enxergar" o carregamento da imagem
            const aguardar = new Date(new Date().getTime() + 1500);
            while (aguardar > new Date()) {}
            const imagem = req.files.imagem;
            imagem.mv("./public/uploads/" + imagem.name);
            res.json({ path: `http://localhost:3001/uploads/${imagem.name}` });
            console.log("Imagem carregada com sucesso");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ erro: "Erro ao processar requisição" });
    }
}

module.exports = upload;
