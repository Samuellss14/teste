import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pequenos Passos, Grandes Impactos',
  description: 'Seu guia para um futuro sustentável',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}