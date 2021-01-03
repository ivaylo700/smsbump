import './App.css';
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { TopMenu } from './components/TopMenu';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

export const DeviceContext = React.createContext('desktop');
const App = () => {

  const [device, setDevice] = useState('desktop')
  const [themeOptionsImage, setThemeOptionsImage] = useState('main')

  const handleThemeOptionsImage = useCallback((image) => {
    setThemeOptionsImage(image)
  }, [])

  return (
    <div className="App">
      <Header />
      <TopMenu />
      <DeviceContext.Provider value={{ device, setDevice }}>
        <Sidebar handleThemeOptionsImage={handleThemeOptionsImage} />
        <Content themeOptionsImage={themeOptionsImage} />
      </DeviceContext.Provider>
    </div>
  );
}

export default App;
