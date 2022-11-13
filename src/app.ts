import express from "express";

const app = express();
const port: number = 4000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
