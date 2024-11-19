import express from 'express';

const posts = [
    {
      id: 1,
      descricao: 'foto teste 1',
      imagem: 'https://placecats.com/millie/300/150'
    },
    {
      id: 2,
      descricao: 'foto teste 2',
      imagem: 'https://placecats.com/millie/300/150'
    },
    {
      id: 3,
      descricao: 'foto teste 3',
      imagem: 'https://placecats.com/millie/300/150'
    },];

const app = express();
app.use(express.json())
app.listen(3000, () => {
    console.log('Sevidor escutando...');
    
});

function buscarPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get('/posts', (req, res) => {
    const index = buscarPorID(req.params.id)
    res.status(200).json(posts[index]);
});
