import express from 'express';
import cors from 'cors';
import produtoController from './controllers/produtoController.js';
import userController from './controllers/userController.js';

const app = express();


app.use(express.json());
app.use(cors())
app.use('/api', produtoController)
app.use('/api', userController)

app.get('/', (req, res) => {
    res.end('Backend funcionando!');
  })

app.use((req, res) => {
    res.status(404).end('Pagina nao encontrada!')
  })

app.listen(3030, () => console.log("Server running on port 3030"));

