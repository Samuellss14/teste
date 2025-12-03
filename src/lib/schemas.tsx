import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  senha: z.string().min(1, 'A senha é obrigatória'),
});

export const registerSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().min(10, 'Telefone inválido'), // Pode melhorar com regex depois
  dataNascimento: z.string().refine((date) => new Date(date).toString() !== 'Invalid Date', {
    message: 'Data inválida',
  }),
  senha: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;