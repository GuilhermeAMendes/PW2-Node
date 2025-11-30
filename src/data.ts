export const usuarios: {
  id: number;
  nome: string;
  email: string;
  senha: string;
}[] = [];

export const alunos: {
  id: number;
  nome: string;
  ra: string;
  nota1: number;
  nota2: number;
}[] = [
  { id: 1, nome: "João Pedro", ra: "2025001", nota1: 7.5, nota2: 8.0 },
  { id: 2, nome: "Maria Souza", ra: "2025002", nota1: 9.0, nota2: 9.5 },
  { id: 3, nome: "Carlos Almeida", ra: "2025003", nota1: 5.0, nota2: 6.0 },
  { id: 4, nome: "Fernanda Lima", ra: "2025004", nota1: 8.0, nota2: 7.5 },
  { id: 5, nome: "Bruno Henrique", ra: "2025005", nota1: 3.5, nota2: 4.0 },
];
