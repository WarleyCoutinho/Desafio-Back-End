import express from 'express';
import 'reflect-metadata';
import { routes } from './routes';

const app = express();

app.use(express.json());

app.use(routes);

const port = normalizaPort(process.env.PORT || '3000');
function normalizaPort(val: any) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

app.listen(port, () => {
  console.log(`Desafio Back-End - "Server is runnig 🚀", na porta ${port}.`);
});
