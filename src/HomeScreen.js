import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeScreen = () => {
  const history = useHistory();

  return (
    <div className="home-screen">
      <header className="header">
        <nav className="menu">

          <p></p> 
          <p></p> 
          {/* Adicione links do menu aqui se necessário */}
          
        </nav>
      </header>
      <main className="main-content">
        <button onClick={() => history.push('/info')}>Acesse aqui</button>
      </main>
    </div>
  );
};

export default HomeScreen;