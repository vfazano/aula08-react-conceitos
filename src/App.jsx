import { useState } from 'react';

const initialReadings = [
  { id: 'r-01', title: 'A forma do cotidiano', author: 'Lina Bo Bardi', category: 'ARQUITETURA', duration: '8 min', color: 'ochre', read: false },
  { id: 'r-02', title: 'Notas sobre a cor', author: 'Josef Albers', category: 'DESIGN', duration: '12 min', color: 'blue', read: true },
  { id: 'r-03', title: 'O jardim e o tempo', author: 'Derek Jarman', category: 'PAISAGEM', duration: '6 min', color: 'green', read: false },
  { id: 'r-04', title: 'Desenhar uma ideia', author: 'Bruno Munari', category: 'PROCESSO', duration: '10 min', color: 'pink', read: false }
];

function Header({ completed, total }) {
  return <header className="header"><a className="brand" href="#topo"><span className="brand-icon">L</span> leituras em curso</a><div className="progress-label"><span>PROGRESSO</span><strong>{completed} / {total}</strong></div></header>;
}

function ReadingCard({ reading, onToggle }) {
  return <article className={`reading-card ${reading.color} ${reading.read ? 'is-read' : ''}`}>
    <div className="card-top"><span>{reading.category}</span><span>{reading.duration}</span></div>
    <div className="card-art" aria-hidden="true"><span className="art-shape" /><span className="art-index">{reading.id.slice(-2)}</span></div>
    <div className="card-copy"><p className="author">{reading.author}</p><h2>{reading.title}</h2><button className="read-toggle" type="button" onClick={() => onToggle(reading.id)} aria-pressed={reading.read}>{reading.read ? 'Concluída' : 'Marcar como lida'} <span aria-hidden="true">{reading.read ? '✓' : '↗'}</span></button></div>
  </article>;
}

function ReadingList({ readings, onToggle }) {
  if (readings.length === 0) return <p className="empty">Nenhuma leitura para mostrar.</p>;
  return <div className="reading-grid">{readings.map((reading) => <ReadingCard key={reading.id} reading={reading} onToggle={onToggle} />)}</div>;
}

export default function App() {
  const [readings, setReadings] = useState(initialReadings);
  const [showPending, setShowPending] = useState(false);
  const completed = readings.filter((reading) => reading.read).length;
  const visibleReadings = showPending ? readings.filter((reading) => !reading.read) : readings;

  function toggleRead(id) {
    setReadings((current) => current.map((reading) => reading.id === id ? { ...reading, read: !reading.read } : reading));
  }

  return <main className="app-shell" id="topo">
    <Header completed={completed} total={readings.length} />
    <section className="hero"><div><p className="eyebrow">PEQUENA BIBLIOTECA, GRANDES IDEIAS</p><h1>Um pouco de<br /><i>cada vez.</i></h1></div><p className="hero-note">Textos guardados para ler sem pressa. Escolha um, atravesse as páginas e marque quando terminar.</p></section>
    <section className="library" aria-labelledby="library-title"><div className="library-heading"><div><p className="eyebrow">A ESTANTE</p><h2 id="library-title">Leituras selecionadas</h2></div><label className="pending-filter"><input type="checkbox" checked={showPending} onChange={(event) => setShowPending(event.target.checked)} /> Só pendentes</label></div>
      <ReadingList readings={visibleReadings} onToggle={toggleRead} />
    </section>
    <footer className="footer"><span>REACT · JSX · COMPONENTES · PROPS</span><span>Uma interface que se atualiza a cada ação.</span></footer>
  </main>;
}
