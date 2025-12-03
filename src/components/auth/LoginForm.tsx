'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LogIn, Mail, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { loginSchema, LoginFormValues } from '@/lib/schemas';
import Link from 'next/link';

export function LoginForm() {
  const { login, loading } = useAuth();
  
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data);
    } catch (error) {
        // Exemplo simples de tratamento de erro
        setError('root', { message: 'Falha no login. Verifique suas credenciais.' });
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Bem-vindo de volta</h1>
        <p className="text-sm text-gray-500">Entre na sua conta para continuar</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              {...register('email')}
              type="email"
              placeholder="joao@email.com"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </div>

        {/* Senha */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              {...register('senha')}
              type="password"
              placeholder="••••••••"
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          {errors.senha && <span className="text-xs text-red-500">{errors.senha.message}</span>}
        </div>

        {errors.root && <div className="text-sm text-red-500 text-center bg-red-50 p-2 rounded">{errors.root.message}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin mr-2" /> : <LogIn className="mr-2 h-4 w-4" />}
          {loading ? 'Entrando...' : 'Entrar'}
        </button>

        <div className="text-center text-sm text-gray-600 mt-4">
          Não tem uma conta?{' '}
          <Link href="/cadastro" className="text-blue-600 hover:underline font-medium">
            Cadastre-se
          </Link>
        </div>
      </form>
    </div>
  );
}