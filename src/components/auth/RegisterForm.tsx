'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Mail, Phone, Calendar, Lock, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { registerSchema, RegisterFormValues } from '@/lib/schemas';
import Link from 'next/link';

export function RegisterForm() {
  const { register: registerUser, loading } = useAuth();
  
  const { register, handleSubmit, formState: { errors }, setError } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await registerUser(data);
    } catch (error) {
      setError('root', { message: 'Erro ao cadastrar. Tente novamente.' });
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Crie sua conta</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        {/* Nome */}
        <div>
          <label className="text-xs font-semibold text-gray-600">Nome Completo</label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input {...register('nome')} className="w-full pl-9 p-2 border rounded text-sm" placeholder="João Silva" />
          </div>
          {errors.nome && <span className="text-xs text-red-500">{errors.nome.message}</span>}
        </div>

        {/* Email */}
        <div>
          <label className="text-xs font-semibold text-gray-600">Email</label>
          <div className="relative">
             <Mail className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input {...register('email')} type="email" className="w-full pl-9 p-2 border rounded text-sm" placeholder="joao@email.com" />
          </div>
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </div>

        {/* Telefone */}
        <div>
          <label className="text-xs font-semibold text-gray-600">Telefone</label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input {...register('telefone')} className="w-full pl-9 p-2 border rounded text-sm" placeholder="(11) 99999-9999" />
          </div>
          {errors.telefone && <span className="text-xs text-red-500">{errors.telefone.message}</span>}
        </div>

        {/* Data Nascimento */}
        <div>
          <label className="text-xs font-semibold text-gray-600">Data de Nascimento</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input {...register('dataNascimento')} type="date" className="w-full pl-9 p-2 border rounded text-sm" />
          </div>
          {errors.dataNascimento && <span className="text-xs text-red-500">{errors.dataNascimento.message}</span>}
        </div>

        {/* Senha */}
        <div>
          <label className="text-xs font-semibold text-gray-600">Senha</label>
          <div className="relative">
            <Lock className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input {...register('senha')} type="password" className="w-full pl-9 p-2 border rounded text-sm" placeholder="******" />
          </div>
          {errors.senha && <span className="text-xs text-red-500">{errors.senha.message}</span>}
        </div>
        
        {errors.root && <div className="text-sm text-red-500 text-center">{errors.root.message}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition-all mt-4 flex justify-center"
        >
          {loading ? <Loader2 className="animate-spin" /> : 'Cadastrar'}
        </button>

         <div className="text-center text-xs text-gray-600 mt-2">
          Já tem conta? <Link href="/login" className="text-blue-600 hover:underline">Faça login</Link>
        </div>
      </form>
    </div>
  );
}