import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log('Sevidor escutando...');
    
});

app.get('/api', (rec, res) => {
    res.status(200).send('Bem vindo');
});