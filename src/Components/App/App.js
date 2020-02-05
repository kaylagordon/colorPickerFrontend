import React from 'react';
import './App.css';
import ColorContainer from '../ColorContainer/ColorContainer';
import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

function App() {
  return (
    <main>
      <ColorContainer />
      <PaletteForm />
      <ProjectForm />
      <ProjectContainer />
    </main>
  );
}

export default App;
