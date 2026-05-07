import React, { useEffect } from 'react';
import './App.css';

// Definindo o tipo para nossas fotos
interface Foto {
  id: number;
  url: string;
  legenda: string;
}

const App: React.FC = () => {
  // Lista com as fotos que você adicionou
  const fotos: Foto[] = [
    { id: 1, url: '/fotos/foto1.jpeg', legenda: 'Amor que não se mede' },
    { id: 2, url: '/fotos/foto2.jpeg', legenda: 'Nossos melhores momentos' },
    { id: 3, url: '/fotos/foto3.jpeg', legenda: 'Exemplo de vida' },
    { id: 4, url: '/fotos/foto4.jpeg', legenda: 'Minha rainha' },
    { id: 5, url: '/fotos/foto5.jpeg', legenda: 'Sempre juntos' },
    { id: 6, url: '/fotos/foto6.jpeg', legenda: 'Feliz Dia das Mães!' },
  ];

  useEffect(() => {
    // Lista de emojis que podem cair
    const emojis = ['❤️', '💖', '👩‍👧‍👦', '💐', '✨', '🌹'];
    const containerBody = document.body;

    // Função que cria UM emoji e o adiciona à tela
    const criarEmoji = () => {
      const emojiEl = document.createElement('div');
      emojiEl.classList.add('emoji-caindo');
      
      // Escolhe um emoji aleatório da lista
      emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];

      // Define posição horizontal aleatória (0% a 100% da largura da tela)
      emojiEl.style.left = Math.random() * 100 + 'vw';

      // Define tamanho aleatório (para dar profundidade)
      emojiEl.style.fontSize = Math.random() * 20 + 15 + 'px'; // Entre 15px e 35px

      // Define duração aleatória da queda (para não caírem todos juntos)
      const duracao = Math.random() * 3 + 2; // Entre 2s e 5s
      emojiEl.style.animationDuration = duracao + 's';

      // Adiciona ao body
      containerBody.appendChild(emojiEl);

      // Remove o elemento do HTML após a animação acabar para não travar o site
      setTimeout(() => {
        emojiEl.remove();
      }, duracao * 1000);
    };

    // Cria um novo emoji a cada 300 milissegundos
    const intervalo = setInterval(criarEmoji, 300);

    // Função de limpeza: para de criar emojis se o usuário sair da página
    return () => clearInterval(intervalo);
  }, []); // [] significa que roda apenas uma vez no carregamento

  return (
    <div className="container-geral">
      <header className="header">
        <h1>Homenagem Dia das Mães</h1>
        <p>Um pequeno gesto para quem nos deu tudo.</p>
      </header>

      <main className="varal-container">
        <div className="corda"></div>
        <div className="mural">
          {fotos.map((foto) => (
            <div key={foto.id} className="polaroid">
              <div className="prendedor"></div>
              <img src={foto.url} alt={foto.legenda} />
              <p className="legenda">{foto.legenda}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>Feito com ❤️ para Patrícia Camila de Oliveira Rocha</p>
      </footer>
    </div>
  );
};

export default App;