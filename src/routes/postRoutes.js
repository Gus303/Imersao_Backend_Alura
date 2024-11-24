import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage});

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições.
app.use(express.json());
    // Rota para obter todos os posts.
app.get("/posts", listarPosts);
app.post("/posts", postarNovoPost);
app.post("/upload", upload.single("imagem"), uploadImagem);
app.put("/upload/:id", atualizarNovoPost)

}

export default routes;
 