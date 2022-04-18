import express from "express";
import { model } from "./model/model.js";
const app = express();

app.get('/tentang/:kelas', (req,res) =>{
    const parameter = req.params.kelas;
    res.send(model(parameter));
});

app.listen(3001, () => console.log('server hidup'));