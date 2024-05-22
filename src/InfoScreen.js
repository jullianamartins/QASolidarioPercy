import React from 'react';
import imagemExemplo from './1.png'; // Substitua pelo caminho correto da sua imagem

const InfoScreen = () => {
  return (
    <div className="info-screen">
      <div className="info-content">
        <img src={imagemExemplo} alt="Descrição da Imagem" />
        <p>Esse é um texto modificado de novo S2.</p>
      </div>
    </div>
  );
};

export default InfoScreen;
