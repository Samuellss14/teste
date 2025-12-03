import { api } from '@/lib/axios';
import { LoginPayload, RegisterPayload, Usuario } from '@/types/auth';

export const authService = {
  login: async (data: LoginPayload): Promise<Usuario> => {
    // Ajuste: como não tem token, assumo que o back retorna o obj do usuário
    const response = await api.post<Usuario>('/usuario/auth/', data);
    return response.data;
  },

  register: async (data: RegisterPayload): Promise<Usuario> => {
    const response = await api.post<Usuario>('/usuario/register/', data);
    return response.data;
  },
};