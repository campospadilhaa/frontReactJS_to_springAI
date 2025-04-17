import { useState } from 'react';
import './App.css';

function App() {

  {/*para transformar os botões em guias*/}
  const [activeTab, setActiveTab] = useState('ask-ai');

  const handleTabChange = (tab) => {

    //alert(tab);
    setActiveTab(tab);
  }

  return (
    <div className="App">
      {/*criação de 3 (três) botões na tela*/}
      <button
        className={activeTab === 'ask-ai'? 'active' : ''}
        onClick={() => handleTabChange('ask-ai')}>
          Converse com AI
      </button>
      <button
        className={activeTab === 'recipe-generator'? 'active' : ''}
        onClick={() => handleTabChange('recipe-generator')}>
          Geração de receitas
      </button>
      <button
        className={activeTab === 'image-generator'? 'active' : ''}
        onClick={() => handleTabChange('image-generator')}>
          Geração de imagens
      </button>

      {/*reação da tela de acordo com o botão executado*/}
      <div>
        {activeTab === 'ask-ai' && <h2>Converse com AI</h2>}
        {activeTab === 'recipe-generator' && <h2>Geração de receitas</h2>}
        {activeTab === 'image-generator' && <h2>Geração de imagens</h2>}
      </div>
    </div>
  );
}

export default App;