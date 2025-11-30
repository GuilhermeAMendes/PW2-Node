import { Router } from "express";
import { usuarios } from "./data";

export const authRoutes = Router();

// POST /register
authRoutes.post("/register", (req, res) => {
  const { id, nome, email, senha } = req.body;

  if (!id || !nome || !email || !senha) {
    return res.status(400).json({ message: "Dados inválidos." });
  }

  if (usuarios.find(u => u.email === email)) {
    return res.status(400).json({ message: "Usuário já existe." });
  }

  usuarios.push({ id, nome, email, senha });
  return res.json({ message: "Usuário registrado com sucesso." });
});

// POST /login
authRoutes.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const user = usuarios.find(u => u.email === email && u.senha === senha);

  if (!user) {
    return res.status(401).json({ message: "Credenciais inválidas." });
  }

  return res.json({ message: "Login realizado com sucesso." });
});
