import express from 'express';

const post = [ {descricao: 'foto teste 1', 
                    imagem: 'https://placecats.com/millie/300/150' },
                {descricao: 'foto teste 2', 
                    imagem: 'https://placecats.com/millie/300/150' },
                {descricao: 'foto teste 3', 
                    imagem: 'https://placecats.com/millie/300/150' },
                {descricao: 'foto teste 4', 
                    imagem: 'https://placecats.com/millie/300/150' },
                {descricao: 'foto teste 5', 
                    imagem: 'https://placecats.com/millie/300/150' },
                {descricao: 'foto teste 6', 
                    imagem: 'https://placecats.com/millie/300/150' } ];

const app = express();
app.use(express.json())
app.listen(3000, () => {
    console.log('Sevidor escutando...');
    
});

app.get('/posts', (rec, res) => {
    res.status(200).json(post);
});
