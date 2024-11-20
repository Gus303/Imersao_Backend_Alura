import express from 'express';
import conectarAoBanco from '../src/config/dbConfig.js';

// Conecta ao banco de dados usando a string de conexão fornecida como variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Cria uma instância do servidor Express.
const app = express();

// Habilita o parsing de JSON no corpo das requisições.
app.use(express.json());

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, () => {
  console.log('Servidor escutando...');
});

// Função assíncrona para obter todos os posts do banco de dados.
async function getTodosPosts() {
  // Seleciona o banco de dados "imersao-back-end".
  const db = conexao.db("imersao-back-end");
  // Seleciona a coleção "posts".
  const colecao = db.collection("posts");
  // Retorna um array com todos os documentos da coleção.
  return colecao.find().toArray();
}

// Rota para obter todos os posts.
app.get("/posts", async (req, res) => {
  // Chama a função para obter os posts do banco de dados.
  const posts = await getTodosPosts();
  // Envia os posts como resposta em formato JSON com status 200 (sucesso).
  res.status(200).json(posts);
});
 