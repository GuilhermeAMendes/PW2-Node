import { Router } from "express";
import { alunos } from "./data";

export const alunosRoutes = Router();

// GET /alunos
alunosRoutes.get("/alunos", (req, res) => {
  return res.json(alunos);
});

// GET /alunos/medias
alunosRoutes.get("/alunos/medias", (req, res) => {
  const medias = alunos.map(a => ({
    nome: a.nome,
    media: (a.nota1 + a.nota2) / 2
  }));
  return res.json(medias);
});

// GET /alunos/aprovados
alunosRoutes.get("/alunos/aprovados", (req, res) => {
  const aprovados = alunos.map(a => {
    const media = (a.nota1 + a.nota2) / 2;
    return {
      nome: a.nome,
      status: media >= 6 ? "aprovado" : "reprovado"
    };
  });

  return res.json(aprovados);
});

// GET /alunos/:id
alunosRoutes.get("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado!" });
  }

  return res.json(aluno);
});

// POST /alunos
alunosRoutes.post("/alunos", (req, res) => {
  const { id, nome, ra, nota1, nota2 } = req.body;

  if (alunos.find(a => a.id === id)) {
    return res.status(400).json({ message: "ID já existe." });
  }

  alunos.push({ id, nome, ra, nota1, nota2 });
  return res.json({ message: "Aluno criado com sucesso!" });
});

// PUT /alunos/:id
alunosRoutes.put("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const aluno = alunos.find(a => a.id === id);

  if (!aluno) {
    return res.status(404).json({ message: "Aluno não encontrado!" });
  }

  Object.assign(aluno, req.body);
  return res.json({ message: "Aluno atualizado!" });
});

// DELETE /alunos/:id
alunosRoutes.delete("/alunos/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = alunos.findIndex(a => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Aluno não encontrado!" });
  }

  alunos.splice(index, 1);
  return res.json({ message: "Aluno removido!" });
});
