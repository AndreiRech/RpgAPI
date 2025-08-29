import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  return res.json({ message: 'Welcome to the RPG API!' });
});

export { app };