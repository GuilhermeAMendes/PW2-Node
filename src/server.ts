import express from "express";
import dotenv from "dotenv";
import { authRoutes } from "./auth.routes";
import { alunosRoutes } from "./aluno.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use(authRoutes);
app.use(alunosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
