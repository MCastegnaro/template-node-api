import express from 'express';
import routes from './routes';

const app = express();
const port = 3333;

app.use(routes);
app.use(express.json());

app.get('/', (request, response) => response.json({ message: 'Ossi' }));

app.listen(port, () => {
  console.log(`🚀 Server started on ${port}`);
});
