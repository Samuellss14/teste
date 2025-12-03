'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Usuario, LoginPayload, RegisterPayload } from '@/types/auth';
import { authService } from '@/services/authService';

interface AuthContextType {
  user: Usuario | null;
  isAuthenticated: boolean;
  login: (data: LoginPayload) => Promise<void>;
  register: (data: RegisterPayload) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Recuperar usuário do localStorage ao carregar a página
  useEffect(() => {
    const storedUser = localStorage.getItem('usuario_logado');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (data: LoginPayload) => {
    try {
      setLoading(true);
      const userResponse = await authService.login(data);
      
      setUser(userResponse);
      localStorage.setItem('usuario_logado', JSON.stringify(userResponse));
      
      router.push('/dashboard'); // Redireciona após login
    } catch (error) {
      console.error('Erro no login', error);
      throw error; // Relança para o formulário tratar o erro visualmente
    } finally {
      setLoading(false);
    }
  };

  const register = async (data: RegisterPayload) => {
    try {
      setLoading(true);
      await authService.register(data);
      // Opcional: Logar automaticamente após cadastro ou mandar para login
      router.push('/login'); 
    } catch (error) {
      console.error('Erro no cadastro', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('usuario_logado');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar o contexto
export const useAuth = () => useContext(AuthContext);