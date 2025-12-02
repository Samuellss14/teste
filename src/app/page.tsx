'use client';

import { useState, useEffect } from 'react';
import { Link2, FileText, Play } from 'lucide-react';

// Ícones personalizados
function GlobeIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="30" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M40 10 C40 10, 55 25, 55 40 C55 55, 40 70, 40 70" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M40 10 C40 10, 25 25, 25 40 C25 55, 40 70, 40 70" stroke="currentColor" strokeWidth="3" fill="none"/>
      <line x1="10" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="3"/>
      <ellipse cx="40" cy="40" rx="30" ry="15" stroke="currentColor" strokeWidth="3" fill="none"/>
    </svg>
  );
}

function PlasticIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 25 L35 15 L45 15 L50 25 M30 25 L25 65 L55 65 L50 25 M30 25 L50 25" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="30" y1="35" x2="50" y2="35" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="28" y1="45" x2="52" y2="45" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="27" y1="55" x2="53" y2="55" stroke="currentColor" strokeWidth="2.5"/>
    </svg>
  );
}

function DeforestationIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 45 L25 65 M25 45 L20 35 L25 25 L30 35 L25 45 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.3"/>
      <path d="M40 50 L40 65 M40 50 L33 38 L40 25 L47 38 L40 50 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.5"/>
      <path d="M55 48 L55 65 M55 48 L50 38 L55 28 L60 38 L55 48 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" opacity="0.3"/>
      <rect x="15" y="65" width="50" height="3" fill="currentColor"/>
    </svg>
  );
}

function BiodiversityIcon() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40 25 L40 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="35" cy="25" r="8" stroke="currentColor" strokeWidth="3" fill="none"/>
      <circle cx="45" cy="25" r="8" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M30 40 Q25 45 25 50 T30 60" stroke="currentColor" strokeWidth="3" fill="none"/>
      <path d="M50 40 Q55 45 55 50 T50 60" stroke="currentColor" strokeWidth="3" fill="none"/>
      <circle cx="28" cy="50" r="3" fill="currentColor"/>
      <circle cx="52" cy="50" r="3" fill="currentColor"/>
    </svg>
  );
}

// Componente ProblemCard
function ProblemCard({ icon, title, onClick }: { icon: React.ReactNode; title: string; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-[#3a5a52] transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="font-bold text-sm text-[#2d2d2d] uppercase leading-tight">
          {title}
        </h4>
      </div>
    </div>
  );
}

// Componente VideoCard
function VideoCard({ image, title, subtitle }: { image: string; title: string; subtitle: string }) {
  return (
    <div className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="aspect-video relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-all">
          <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
            <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <div className="p-3 bg-white">
        <p className="font-semibold text-sm text-gray-800">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
}

// Componente DocCard
function DocCard({ 
  image, 
  title, 
  subtitle, 
  bgColor = 'bg-gray-100',
  textColor = 'text-gray-800'
}: { 
  image: string; 
  title: string; 
  subtitle?: string;
  bgColor?: string;
  textColor?: string;
}) {
  return (
    <div className="group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className={`${bgColor} p-6 text-center`}>
        <p className={`font-bold text-lg ${textColor}`}>{title}</p>
        {subtitle && <p className={`text-sm ${textColor} opacity-80`}>{subtitle}</p>}
      </div>
      <div className="aspect-[4/3] relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
    </div>
  );
}

// Componente SolutionCard
function SolutionCard({ 
  icon, 
  title, 
  items 
}: { 
  icon: React.ReactNode; 
  title: string; 
  items: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className="text-[#3a5a52] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-base text-[#2d2d2d] mb-3 uppercase">
            {title}
          </h4>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-sm text-gray-700 leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-[#3a5a52] flex-shrink-0 ml-auto opacity-30">
          {icon}
        </div>
      </div>
    </div>
  );
}

// Componente principal Home
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showAquecimentoModal, setShowAquecimentoModal] = useState(false);
  const [showPoluicaoModal, setShowPoluicaoModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Modal Aquecimento Global */}
      {showAquecimentoModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setShowAquecimentoModal(false)}
        >
          <div 
            className="bg-[#e8e8e8] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAquecimentoModal(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">AQUECIMENTO GLOBAL</h2>
              <p className="text-lg text-gray-600 mb-12">A temperatura não para de subir</p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Gráfico */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">
                    Aumento da Temperatura Média Global:<br/>
                    +1.2°C desde a era pré-industrial
                  </h3>
                  <div className="relative h-48">
                    <svg width="100%" height="100%" viewBox="0 0 200 150" className="overflow-visible">
                      {/* Eixos */}
                      <line x1="20" y1="130" x2="180" y2="130" stroke="#ccc" strokeWidth="2"/>
                      <line x1="20" y1="20" x2="20" y2="130" stroke="#ccc" strokeWidth="2"/>
                      
                      {/* Linha do gráfico */}
                      <polyline
                        points="20,120 40,115 60,110 80,100 100,95 120,85 140,75 160,60 180,40"
                        fill="none"
                        stroke="#e85d75"
                        strokeWidth="3"
                      />
                      
                      {/* Seta */}
                      <path d="M170,45 L180,40 L175,50 Z" fill="#e85d75"/>
                      
                      {/* Labels */}
                      <text x="10" y="135" fontSize="10" fill="#666">0</text>
                      <text x="90" y="145" fontSize="10" fill="#666">10</text>
                      <text x="170" y="145" fontSize="10" fill="#666">20</text>
                    </svg>
                  </div>
                </div>

                {/* Recordes de Calor */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-[#3a5a52] mb-4">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                      <circle cx="40" cy="25" r="8" stroke="currentColor" strokeWidth="3"/>
                      <rect x="36" y="30" width="8" height="30" fill="currentColor"/>
                      <circle cx="40" cy="60" r="12" fill="currentColor"/>
                      <path d="M40 35 L40 55" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-base text-[#2d2d2d] mb-2">Recordes de Calor:</h4>
                  <p className="text-sm text-gray-700">Ondas de calor mais frequentes e intensas</p>
                </div>

                {/* Derretimento de Gelo */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-[#3a5a52] mb-4">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                      <path d="M20,50 Q30,40 40,45 T60,50 L65,60 Q55,65 40,60 T15,60 Z" fill="currentColor" opacity="0.3"/>
                      <path d="M25,35 L30,25 L35,35 L40,30 L45,35 L50,28 L55,35" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="30" cy="28" r="2" fill="currentColor"/>
                      <circle cx="50" cy="31" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-base text-[#2d2d2d] mb-2">Derretimento de Gelo:</h4>
                  <p className="text-sm text-gray-700">Polos e geleiras derretem rapidamente</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Causas Principais</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3a5a52]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3a5a52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.07-.24C8.07 17.77 11.06 13.7 17 12zm-3-4l-2-4v4h-2c0 1.66 1.34 3 3 3s3-1.34 3-3h-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d2d2d] mb-1">Emissão de Gases de Efeito Estufa</h4>
                      <p className="text-sm text-gray-700">CO₂ e metano provenientes da queima de combustíveis fósseis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3a5a52]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3a5a52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d2d2d] mb-1">Desmatamento</h4>
                      <p className="text-sm text-gray-700">Redução de áreas florestais que absorvem CO₂</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3a5a52]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3a5a52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d2d2d] mb-1">Indústria e Agricultura</h4>
                      <p className="text-sm text-gray-700">Processos industriais e pecuária intensiva emitem grandes quantidades de gases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Poluição Plástica */}
      {showPoluicaoModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setShowPoluicaoModal(false)}
        >
          <div 
            className="bg-[#e8e8e8] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPoluicaoModal(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-12">
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                {/* Left Column */}
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">POLUIÇÃO PLÁSTICA</h2>
                  <p className="text-lg text-gray-600 mb-8">O mar de lixo que sufoca o planeta</p>

                  <button className="bg-[#3a5a52] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d4540] transition-colors mb-8">
                    JEITINHO
                  </button>

                  {/* Volume Crítico */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                    <div className="flex items-start gap-4">
                      <svg className="w-12 h-12 text-[#3a5a52] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">VOLUME CRÍTICO</h3>
                        <p className="text-sm text-gray-700">1.1 milhões de toneladas por nos oceanos</p>
                      </div>
                    </div>
                  </div>

                  {/* Microplásticos */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <svg className="w-12 h-12 text-[#3a5a52] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                      <div>
                        <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">MICROPLÁSTICOS:</h3>
                        <p className="text-sm text-gray-700">Invisíveis, mas presente na cadeia alimentar</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px]">
                  <img
                    src="https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=800"
                    alt="Tartaruga marinha nadando entre plásticos"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Tempo de Decomposição */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-8 text-center">Tempo de Decomposição Estimado</h3>
                
                <div className="grid grid-cols-5 gap-4 mb-6">
                  {/* Ícones */}
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-[#3a5a52] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-[#3a5a52] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-[#3a5a52] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-[#3a5a52] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-[#3a5a52] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>

                {/* Barra de progressão */}
                <div className="relative h-2 bg-gray-200 rounded-full mb-4">
                  <div className="absolute h-full bg-gradient-to-r from-[#3a5a52] to-[#7dd3c0] rounded-full" style={{width: '100%'}}></div>
                </div>

                {/* Labels */}
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div>
                    <p className="font-bold text-sm text-[#2d2d2d]">Sacola Plástica:</p>
                    <p className="text-xs text-gray-600">Até 500 anos</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2d2d2d]">Copo Plástico:</p>
                    <p className="text-xs text-gray-600">Até 450 anos</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2d2d2d]">Garrafa PET</p>
                    <p className="text-xs text-gray-600">Até 400 anos</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2d2d2d]">Embalagem:</p>
                    <p className="text-xs text-gray-600">Até 100 anos</p>
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2d2d2d]">Caneta:</p>
                    <p className="text-xs text-gray-600">Até 100 anos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      {showAquecimentoModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setShowAquecimentoModal(false)}
        >
          <div 
            className="bg-[#e8e8e8] rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAquecimentoModal(false)}
              className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">AQUECIMENTO GLOBAL</h2>
              <p className="text-lg text-gray-600 mb-12">A temperatura não para de subir</p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Gráfico */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-sm font-semibold text-gray-700 mb-4">
                    Aumento da Temperatura Média Global:<br/>
                    +1.2°C desde a era pré-industrial
                  </h3>
                  <div className="relative h-48">
                    <svg width="100%" height="100%" viewBox="0 0 200 150" className="overflow-visible">
                      {/* Eixos */}
                      <line x1="20" y1="130" x2="180" y2="130" stroke="#ccc" strokeWidth="2"/>
                      <line x1="20" y1="20" x2="20" y2="130" stroke="#ccc" strokeWidth="2"/>
                      
                      {/* Linha do gráfico */}
                      <polyline
                        points="20,120 40,115 60,110 80,100 100,95 120,85 140,75 160,60 180,40"
                        fill="none"
                        stroke="#e85d75"
                        strokeWidth="3"
                      />
                      
                      {/* Seta */}
                      <path d="M170,45 L180,40 L175,50 Z" fill="#e85d75"/>
                      
                      {/* Labels */}
                      <text x="10" y="135" fontSize="10" fill="#666">0</text>
                      <text x="90" y="145" fontSize="10" fill="#666">10</text>
                      <text x="170" y="145" fontSize="10" fill="#666">20</text>
                    </svg>
                  </div>
                </div>

                {/* Recordes de Calor */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-[#3a5a52] mb-4">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                      <circle cx="40" cy="25" r="8" stroke="currentColor" strokeWidth="3"/>
                      <rect x="36" y="30" width="8" height="30" fill="currentColor"/>
                      <circle cx="40" cy="60" r="12" fill="currentColor"/>
                      <path d="M40 35 L40 55" stroke="white" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-base text-[#2d2d2d] mb-2">Recordes de Calor:</h4>
                  <p className="text-sm text-gray-700">Ondas de calor mais frequentes e intensas</p>
                </div>

                {/* Derretimento de Gelo */}
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-[#3a5a52] mb-4">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                      <path d="M20,50 Q30,40 40,45 T60,50 L65,60 Q55,65 40,60 T15,60 Z" fill="currentColor" opacity="0.3"/>
                      <path d="M25,35 L30,25 L35,35 L40,30 L45,35 L50,28 L55,35" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="30" cy="28" r="2" fill="currentColor"/>
                      <circle cx="50" cy="31" r="2" fill="currentColor"/>
                    </svg>
                  </div>
                  <h4 className="font-bold text-base text-[#2d2d2d] mb-2">Derretimento de Gelo:</h4>
                  <p className="text-sm text-gray-700">Polos e geleiras derretem rapidamente</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">Causas Principais</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3a5a52]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3a5a52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.07-.24C8.07 17.77 11.06 13.7 17 12zm-3-4l-2-4v4h-2c0 1.66 1.34 3 3 3s3-1.34 3-3h-2z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d2d2d] mb-1">Emissão de Gases de Efeito Estufa</h4>
                      <p className="text-sm text-gray-700">CO₂ e metano provenientes da queima de combustíveis fósseis</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3a5a52]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3a5a52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d2d2d] mb-1">Desmatamento</h4>
                      <p className="text-sm text-gray-700">Redução de áreas florestais que absorvem CO₂</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3a5a52]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#3a5a52]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#2d2d2d] mb-1">Indústria e Agricultura</h4>
                      <p className="text-sm text-gray-700">Processos industriais e pecuária intensiva emitem grandes quantidades de gases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#3a5a52]/95 backdrop-blur-lg' : 'bg-[#3a5a52]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-white font-bold text-lg">SSJL</div>
            <ul className="flex gap-8 items-center">
              {['Início', 'O Problema', 'A Solução', 'Recursos', 'Sobre'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    onClick={(e) => scrollToSection(e, `#${item.toLowerCase().replace(' ', '-')}`)}
                    className="text-white text-sm font-medium hover:text-[#7dd3c0] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="início" className="relative h-screen w-full flex flex-col justify-center items-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2000')`,
            }}
          />
        </div>

        <div className="px-6 max-w-4xl animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
            PEQUENOS PASSOS,
            <br />
            GRANDES IMPACTOS
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 font-light opacity-95">
            Seu guia para um futuro sustentável
          </p>

          <a
            href="#o-problema"
            onClick={(e) => scrollToSection(e, '#o-problema')}
            className="inline-block bg-[#7dd3c0] text-[#1a3a2e] px-10 py-4 text-lg md:text-xl font-semibold rounded-full transition-all duration-300 hover:bg-[#68c4ae] hover:-translate-y-1 hover:shadow-2xl shadow-[0_10px_30px_rgba(125,211,192,0.3)] animate-pulse hover:animate-none"
          >
            Começe Clicando Aqui
          </a>
        </div>
      </section>

      {/* O Problema Section */}
      <section id="o-problema" className="min-h-screen bg-[#e8e8e8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Cards */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">O PROBLEMA</h2>
              <p className="text-lg text-gray-600 mb-12">Fatos e dados sobre o impacto ambiental</p>

              <div className="grid grid-cols-2 gap-6">
                <ProblemCard
                  icon={<GlobeIcon />}
                  title="AQUECIMENTO GLOBAL"
                  onClick={() => setShowAquecimentoModal(true)}
                />
                <ProblemCard
                  icon={<PlasticIcon />}
                  title="POLUIÇÃO PLÁSTICA"
                  onClick={() => setShowPoluicaoModal(true)}
                />
                <ProblemCard
                  icon={<DeforestationIcon />}
                  title="DESMATAMENTO"
                />
                <ProblemCard
                  icon={<BiodiversityIcon />}
                  title="PERDA DE BIODIVERSIDADE"
                />
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
              <img
                src="https://thumbs.dreamstime.com/b/terra-seca-rachada-sem-wate-da-lama-verde-global-geological-extrema-ambiental-suja-est%C3%A9ril-%C3%A1rida-abstrata-vida-do-n%C3%ADvel-das-145486715.jpg"
                alt="Terra rachada pela seca"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* A Solução Section */}
      <section id="a-solução" className="min-h-screen bg-[#e8e8e8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] group">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
                alt="Homem comprando vegetais frescos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Right Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">A SOLUÇÃO</h2>
              <p className="text-lg text-gray-600 mb-12">Dicas práticas para um futuro sustentável</p>

              <div className="space-y-6">
                <SolutionCard
                  icon={
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 20 L25 10 L35 20 M25 10 L25 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 35 L10 40 L40 40 L40 35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="18" y="25" width="14" height="15" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                    </svg>
                  }
                  title="CONSUMO CONSCIENTE"
                  items={[
                    "Reduza o consumo (compre menos!)",
                    "Escolha produtos renováveis e sustentáveis"
                  ]}
                />

                <SolutionCard
                  icon={
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 10 L25 40" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M15 20 L25 10 L35 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <circle cx="25" cy="35" r="3" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                      <path d="M20 15 Q15 20 15 25 M30 15 Q35 20 35 25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                    </svg>
                  }
                  title="LIXO ZERO / RECICLAGEM"
                  items={[
                    "Separe seus lixos, entre recicláveis e orgânicos",
                    "Comece uma compostagem doméstica"
                  ]}
                />

                <SolutionCard
                  icon={
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25 15 Q20 20 20 25 Q20 30 25 35 Q30 30 30 25 Q30 20 25 15" stroke="currentColor" strokeWidth="2.5" fill="none"/>
                      <circle cx="25" cy="25" r="2" fill="currentColor"/>
                      <path d="M15 38 L35 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  }
                  title="ECONOMIA DE RECURSOS"
                  items={[
                    "Reaproveite materiais que iriam para o lixo, dando-lhes novas funções.",
                    "Crie produtos de limpeza naturais"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Section */}
      <section id="recursos" className="min-h-screen bg-[#e8e8e8] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">RECURSOS</h2>
          <p className="text-lg text-gray-600 mb-16">Dicas práticas adquira conheimento e inspire-se</p>

          {/* Links Úteis */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <Link2 className="w-8 h-8 text-[#3a5a52]" />
              <h3 className="text-2xl font-bold text-[#2d2d2d]">LINKS ÚTEIS</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Lista de links */}
              <div className="space-y-3">
                <div className="text-gray-700">
                  <span className="font-semibold">• ONU Meio Ambiente</span>
                  <div className="text-sm text-gray-500 ml-4">
                    (follow us: <a href="#" className="text-blue-600 underline">@unep and take action</a>)
                  </div>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">• WWF Brasil</span>
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold">• Greenpeace</span>
                  <a href="#" className="text-blue-600 underline ml-1">(parts/brazil)</a>
                </div>
              </div>

              {/* Cards de vídeo */}
              <div className="grid grid-cols-3 gap-4">
                <VideoCard 
                  image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400"
                  title="Nossa Planeta"
                  subtitle="(Netflix)"
                />
                <VideoCard 
                  image="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400"
                  title="Seaspiracy"
                  subtitle="Netflix"
                />
                <VideoCard 
                  image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400"
                  title="Uma Verdade Inco..."
                  subtitle="(Amazon Prime..."
                />
              </div>
            </div>
          </div>

          {/* Documentários */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-[#3a5a52]" />
              <h3 className="text-2xl font-bold text-[#2d2d2d]">DOCUMENTÁRIOS</h3>
            </div>

            <div className="space-y-3 mb-8">
              <div className="text-gray-700">
                <span className="font-semibold">• Greenpeace</span>
                <div className="text-sm text-gray-500 ml-4">(Greenpeace campaigns—Brazil)</div>
              </div>
            </div>

            {/* Cards de documentários */}
            <div className="grid grid-cols-3 gap-4">
              <DocCard 
                image="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400"
                title="O FUTURO"
                subtitle="que queremos"
                bgColor="bg-[#f5e6d3]"
              />
              <DocCard 
                image="https://images.unsplash.com/photo-1511497584788-876760111969?w=400"
                title="Viva sem Plástico"
                bgColor="bg-[#3a5a52]"
                textColor="text-white"
              />
              <DocCard 
                image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400"
                title="PEGADA"
                subtitle="Hidricas"
                bgColor="bg-[#e8d5c4]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="min-h-screen bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Column - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] mb-4">SOBRE & CONTATO</h2>
              <p className="text-lg text-gray-600 mb-16">Nossa missão e como você pode se conectar</p>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">NOSSA HISTÓRIA</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum sed et lorem ensior de orae d ensias ensie eius blandem oreveni
                  saquiatiantur ior antionearawis onsias bersin sonam qui rehenihilitis
                  essitatent exeris, omnisit ut quos sus sint sedion tatisam. Constuenta
                  nobiactis puertue a litexate cessium que o conto a llateob.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <img
                  src="https://lh3.googleusercontent.com/rd-gg/AIJ2gl_K6uIxxDztMyE5BJuKtgN8GBY3rkXOOxK4Zt8SS-gWxqkc2kyk5vDoNaq5JiBCjllkmZoBxq1eV1CiVRmSaQQp21oppypuTsO87Ysd4JES8_lDm6mQTMDEis_xRpFPMQ7skESDaE-a1yN0mobhx3Ynks44OctIO5u9ZKgCLoRilb5kw1tQ8SykP8h3Y9KQBW2a87Yiha5oWzcU7D41Hl1NZlj7ccRGeJM3k6EpT1umdVigP1HR04xBVRmfavyCmVNElKRFgzkYKqEQHl99WCzbZW_9JoSVrHpL1psouoDfPrtwV0JpdHKrkPezLk5jAOcDFyxZMn-u8pH2WIQLEjrjJPy03FXNGrMfycsnYoD1xBDn0oS5MIwyWLDhKZpvWo6BS2gql05Z88UY-aMqUWZxIeVPRy83Mu1fu7T2R13bYukqXxrCXeFI3DeyrY9xcB-75nmX6LmSXKSpR2SPqxjdKsGM31m8H1rIEN9FOZDaDWjCvMUhoAmSWKttZCx0iTM-qJQN24FhSp9RHGfp4-u43HOv8TYs4Bgk-nvu7_hmfyvWahCSBpRoPE1D_UO3Iv4s6VceP_tDRPH4BVohGUlPIeQvauX9Hc4swntSQvDQbYnKxZqX1i4MUIbAPZpxLfIT7wcndANxDTKVn5IIZdnOjW5lNfF7GZLuiDDur0VqVxjBeUMaURBec8Vph9yJnstNgWGKNT-SLll-rcyKfv__sEm3dOHE3y_AL2mrMnIQtJFPA4iPyj5A_kzR6eYVCq320YeNlcEJsT1eNRQm55EqhAlUX7zRQm7Y5ZVj-4ihRR8JKc_4UnNpCMCYFu4CX0P9pPKrVYB8lBn-Zoz00Pc19SmARL425s7fZKxmkHqCVWZHuoxwWAd9obTdwQWbiggcKv8R6EABKMtgkSSJEROlKfDoHAgEsYMOzm8V69roYPyp09wt7c_rizqbN-xFnnivA1bkSxt9qbv3E0wNrFSfWD7VmUShnk1AQBytPh2hPUGKFHBoE086kZfIepxShRczLtF3RfZ2zSqlhVh1T7wEV2VZ8g_W5I7F93MWLGcq2IQ0kAbcyDVyw4Q8VzKtWX4hFjbbMQeZC0Gsw8OaXX3NdE7c6t9gFH2_AUALps4SsQHV4lNKQd4vMkSRisc6yUH9BL67H6FJbesPhi5mAqCfNlre4wbLmJfl7dct9CujBvzwb7ZDbAtGGaG1DnF2nAc3Kpx-5UL40a9NJp-3uNOO1amvEqqnS4XtY8E1GBYo9jEVsv3BzzNHI4Bd0wAhCLMHRG0zXzH9eRof2KqEMqQetXVnNOvQXzC85I1q46sPLjcdplVLG4DA8OAKbG2w8TF0g7Q5ryDdLEXnjt-Qzw=s1024-rj"
                  alt="Criador"
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
                <div>
                  <p className="text-gray-600 text-sm">Criado por SSJL</p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact & Image */}
            <div>
              <div className="bg-gray-50 rounded-2xl p-8 mb-8 shadow-md">
                <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">FALE CONOSCO</h3>
                <div className="space-y-4">
                  <a 
                    href="mailto:ssjl@hotmail.com" 
                    className="flex items-center gap-3 text-gray-700 hover:text-[#3a5a52] transition-colors group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <path d="M2 7 L12 13 L22 7" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                    <span className="group-hover:underline">ssjl@hotmail.com</span>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-[#3a5a52] transition-colors group"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                    <span className="group-hover:underline">@s.s.j.l</span>
                  </a>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800"
                  alt="Grupo de pessoas plantando árvores"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}