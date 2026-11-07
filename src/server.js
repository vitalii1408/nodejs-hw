import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import pino from 'pino-http';

const PORT = process.env.PORT ?? 3000;

const app = express();

app.use(pino());
app.use(cors());
app.use(express.json());



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
