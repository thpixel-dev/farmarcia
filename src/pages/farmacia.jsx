import React, { useState } from 'react';
import './farmacia.css';
function Farmacia() {
  const [inaugurationDate] = useState('15 de março de 2023');
  const [inaugurationTime] = useState('9h às 18h');
  const [normalQueue, setNormalQueue] = useState([]);
  const [priorityQueue, setPriorityQueue] = useState([]);
  const [normalPassword, setNormalPassword] = useState(1);
  const [priorityPassword, setPriorityPassword] = useState(1);
  const [currentServing, setCurrentServing] = useState('');


  const generateNormalPassword = () => {
    setNormalQueue([...normalQueue, `N${normalPassword}`]);
    setNormalPassword(normalPassword + 1);
  };


  const generatePriorityPassword = () => {
    setPriorityQueue([...priorityQueue, `P${priorityPassword}`]);
    setPriorityPassword(priorityPassword + 1);
  };

  
  const serveNormal = () => {
    if (normalQueue.length > 0) {
      setCurrentServing(normalQueue[0]);
      setNormalQueue(normalQueue.slice(1));
    } else {
      alert('Não há senhas normais na fila.');
    }
  };

  
  const servePriority = () => {
    if (priorityQueue.length > 0) {
      setCurrentServing(priorityQueue[0]);
      setPriorityQueue(priorityQueue.slice(1));
    } else {
      alert('Não há senhas preferenciais na fila.');
    }
  };

  return (
    <div>
     
      <header className="header">
        <Logo />
        <h1>Farmácia </h1>
      </header>

      
      <main className="main-body">
        <section>
          <h2>Nova Direção, Mesmo Compromisso com a Qualidade</h2>
          <p>A nossa farmácia mudou, mas o nosso compromisso com a saúde e bem-estar da nossa comunidade permanece o mesmo.</p>
          <img src="nova-marca-logo.png" alt="Nova Marca da Farmácia" />
          <div className="promotion-adhesive">
            <p>Promoção: 10% de desconto em todos os produtos!</p>
          </div>
        </section>
        <section>
          <h2>Inauguração: Você É Convidado!</h2>
          <p>Venha conhecer a nossa nova loja e desfrute de ofertas especiais na inauguração.</p>
          <p>Data: {inaugurationDate}</p>
          <p>Horário: {inaugurationTime}</p>
          <button>Confirme sua presença!</button>
          alert "voçe comfirmou sua presença"
        </section>

        
        <div className="password-controller">
          <h3>Gerenciamento de Senhas</h3>
          <div className="queues">
            <div className="queue">
              <h4>Fila Normal</h4>
              <ul>
                {normalQueue.map((senha, index) => (
                  <li key={index}>{senha}</li>
                ))}
              </ul>
              <button onClick={generateNormalPassword}>Gerar Senha Normal</button>
              <button onClick={serveNormal}>Atender Senha Normal</button>
            </div>
            <div className="queue">
              <h4>Fila Preferencial</h4>
              <ul>
                {priorityQueue.map((senha, index) => (
                  <li key={index}>{senha}</li>
                ))}
              </ul>
              <button onClick={generatePriorityPassword}>Gerar Senha Preferencial</button>
              <button onClick={servePriority}>Atender Senha Preferencial</button>
            </div>
          </div>
          <div className="current-serving">
            <h4>Senha em Atendimento: {currentServing || 'Nenhuma'}</h4>
          </div>
        </div>
      </main>
    </div>
  );
}


function Logo() {
  return <img src="nova-marca-logo.png" alt="Nova Marca da Farmácia" className="logo" />;
}

export default Farmacia;
