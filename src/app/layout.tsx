import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: 'Pequenos Passos, Grandes Impactos',
  description: 'Seu guia para um futuro sustentável',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <AuthProvider>
            {children}
        </AuthProvider>
      </body>
    </html>
  );
}