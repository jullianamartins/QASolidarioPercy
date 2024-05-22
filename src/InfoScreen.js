import React from 'react';
import imagemExemplo from './1.png'; // Substitua pelo caminho correto da sua imagem

const InfoScreen = () => {
  return (
    <div className="info-screen">
      <div className="info-content">
        <img src={imagemExemplo} alt="Descrição da Imagem" />
        <p>Texto ao lado da imagem.</p>
      </div>
    </div>
  );
};

export default InfoScreen;
