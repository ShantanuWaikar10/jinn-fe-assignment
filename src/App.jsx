import React, { useState } from 'react';
import './App.css';
import CustomizationPanel from './components/CustomizationPanel';
import ChatBotUI from './components/ChatBotUI';

function App() {
  const [styles, setStyles] = useState({
    buttonIcon: '🤖',
    borderColor: '#000000',
    borderRadius: '5',
    chatTitleBg: '#000000',
    botBubbleBg: '#f0f0f0',
    botTextColor: '#000000',
    userBubbleBg: '#000000',
    userTextColor: '#ffffff',
    fontFamily: 'Arial',
  });

  const handleStyleChange = (key, value) => {
    setStyles({ ...styles, [key]: value });
  };

  return (
    <div className="app">
      <CustomizationPanel styles={styles} onStyleChange={handleStyleChange} />
      <ChatBotUI styles={styles} />
    </div>
  );
}

export default App;
