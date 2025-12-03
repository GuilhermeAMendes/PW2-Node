import { Router } from "express";
import jwt from "jsonwebtoken";
import { usuarios } from "./data";

export const authRoutes = Router();

const JWT_SECRET = process.env.JWT_SECRET || "segredo";

// POST /register
authRoutes.post("/register", (req, res) => {
  const { id, nome, email, senha } = req.body;

  if (!id || !nome || !email || !senha) {
    return res.status(400).json({ message: "Dados inválidos." });
  }

  if (usuarios.find((u) => u.email === email)) {
    return res.status(400).json({ message: "Usuário já existe." });
  }

  usuarios.push({ id, nome, email, senha });
  return res.json({ message: "Usuário registrado com sucesso." });
});

// POST /login
authRoutes.post("/login", (req, res) => {
  const { email, senha } = req.body;

  const user = usuarios.find((u) => u.email === email && u.senha === senha);

  if (!user) {
    return res.status(401).json({ message: "Credenciais inválidas." });
  }

  const payload = {
    id: user.id,
    nome: user.nome,
    email: user.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

  return res.json({
    message: "Login realizado com sucesso.",
    token: token,
    expiresIn: "1h",
  });
});
