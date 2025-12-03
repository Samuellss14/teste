export interface Usuario {
  id?: number; // Assumindo que o banco retorna um ID
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
}

export interface LoginPayload {
  email: string;
  senha: string;
}

export interface RegisterPayload {
  nome: string;
  dataNascimento: string; // Formato YYYY-MM-DD
  telefone: string;
  email: string;
  senha: string;
}