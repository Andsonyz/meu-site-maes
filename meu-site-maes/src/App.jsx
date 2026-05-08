import React, { useEffect } from 'react';
import './App.css';

const App = () => {
  // Lista com as fotos (sem a interface Foto)
  const fotos = [
    { id: 1, url: '/fotos/foto1.jpeg', legenda: 'Amor que não se mede' },
    { id: 2, url: '/fotos/foto2.jpeg', legenda: 'Nossos melhores momentos' },
    { id: 3, url: '/fotos/foto3.jpeg', legenda: 'Exemplo de vida' },
    { id: 4, url: '/fotos/foto4.jpeg', legenda: 'Minha rainha' },
    { id: 5, url: '/fotos/foto5.jpeg', legenda: 'Sempre juntos' },
    { id: 6, url: '/fotos/foto6.jpeg', legenda: 'Feliz Dia das Mães!' },
  ];

  useEffect(() => {
    const emojis = ['❤️', '💖', '👩‍👧‍👦', '💐', '✨', '🌹'];
    const containerBody = document.body;

    const criarEmoji = () => {
      const emojiEl = document.createElement('div');
      emojiEl.classList.add('emoji-caindo');
      
      emojiEl.innerText = emojis[Math.floor(Math.random() * emojis.length)];
      emojiEl.style.left = Math.random() * 100 + 'vw';
      emojiEl.style.fontSize = Math.random() * 20 + 15 + 'px';

      const duracao = Math.random() * 3 + 2;
      emojiEl.style.animationDuration = duracao + 's';

      containerBody.appendChild(emojiEl);

      setTimeout(() => {
        emojiEl.remove();
      }, duracao * 1000);
    };

    const intervalo = setInterval(criarEmoji, 300);

    return () => clearInterval(intervalo);
  }, []);

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