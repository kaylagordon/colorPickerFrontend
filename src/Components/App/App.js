import React from 'react';
import './App.scss';
import ColorContainer from '../ColorContainer/ColorContainer';
import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectContainer from '../ProjectContainer/ProjectContainer';

function App() {
  return (
    <main>
      <h1>Palette Picker</h1>
      <ColorContainer />
      <ProjectForm />
      <ProjectContainer />
    </main>
  );
}

export default App;
