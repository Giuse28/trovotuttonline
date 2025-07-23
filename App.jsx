import './index.css';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', lineHeight: 1.6 }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Trovotuttonline</h1>
        <p style={{ fontSize: '1.2rem', color: '#666' }}>
          Tecnologia, vita, soluzioni. Subito. Senza complicazioni.
        </p>
      </header>

      <main>
        <article style={{ marginBottom: '40px' }}>
          <h2>Come velocizzare il tuo smartphone Android</h2>
          <img src="https://source.unsplash.com/800x400/?smartphone" alt="Smartphone" style={{ width: '100%', borderRadius: '8px' }} />
          <p>
            Se il tuo telefono Android è lento, prova a disinstallare le app inutilizzate e svuotare la cache. Scopri la guida completa cliccando qui.
          </p>
        </article>

        <article style={{ marginBottom: '40px' }}>
          <h2>Come risparmiare nella gestione di un ristorante</h2>
          <img src="https://source.unsplash.com/800x400/?restaurant" alt="Ristorante" style={{ width: '100%', borderRadius: '8px' }} />
          <p>
            Lavori nella ristorazione? Ti svelo 5 strategie usate dai manager di successo per aumentare i margini senza sacrificare la qualità.
          </p>
        </article>
      </main>

      <footer style={{ textAlign: 'center', marginTop: '60px', color: '#aaa' }}>
        <p>© 2025 Trovotuttonline - Tutti i diritti riservati</p>
      </footer>
    </div>
  );
}

export default App;
