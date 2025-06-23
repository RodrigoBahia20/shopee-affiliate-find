
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim()) {
      console.log('Buscando por:', searchTerm);
      // Aqui será implementada a lógica de busca futuramente
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-red-50 py-16 px-4 sm:py-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título Principal */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Encontre as melhores
          <span className="text-orange-500 block mt-2">ofertas da Shopee</span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Descubra produtos incríveis com os melhores preços e ofertas exclusivas. 
          Sua busca inteligente por economia começa aqui!
        </p>

        {/* Barra de Busca */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Digite o que você está procurando..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-lg sm:rounded-r-none h-14"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-lg sm:rounded-l-none h-14"
            >
              Buscar
            </Button>
          </div>
          
          {/* Sugestões de Busca */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-gray-500 mr-2">Sugestões:</span>
            {['smartphone', 'fone de ouvido', 'roupas', 'casa e jardim', 'beleza'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => setSearchTerm(suggestion)}
                className="text-sm bg-white text-gray-600 hover:text-orange-500 hover:bg-orange-50 px-3 py-1 rounded-full border border-gray-200 hover:border-orange-200 transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
