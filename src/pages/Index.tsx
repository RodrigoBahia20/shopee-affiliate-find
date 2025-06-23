
import React from 'react';
import Header from '@/components/layout/Header';
import SearchSection from '@/components/home/SearchSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <SearchSection />
        
        {/* Seção de Estatísticas */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">1M+</div>
                <div className="text-gray-600">Produtos disponíveis</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">50K+</div>
                <div className="text-gray-600">Ofertas ativas</div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-orange-500 mb-2">99%</div>
                <div className="text-gray-600">Satisfação dos usuários</div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Categorias Populares */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Categorias Populares
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'Eletrônicos', emoji: '📱' },
                { name: 'Moda', emoji: '👗' },
                { name: 'Casa', emoji: '🏠' },
                { name: 'Beleza', emoji: '💄' },
                { name: 'Esportes', emoji: '⚽' },
                { name: 'Livros', emoji: '📚' }
              ].map((category) => (
                <div
                  key={category.name}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.emoji}
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    {category.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer simples */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 ShopeeHub. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
