import express from "express";
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    // Habilita o parsing de JSON no corpo das requisições.
app.use(express.json());
    // Rota para obter todos os posts.
app.get("/posts", listarPosts);
app.post("/posts", postarNovoPost);

}

export default routes;
