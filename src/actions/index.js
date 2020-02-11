export const addPalette = (palette) => ({
  type: 'ADD_PALETTE',
  palette
});

export const addProject = (name, id) => ({
  type: 'ADD_PROJECT',
  project: {
    name,
    id
  }
});

export const deletePalette = id => ({
  type: 'DELETE_PALETTE',
  id
});

export const deleteProject = id => ({
  type: 'DELETE_PALETTE',
  id
});

export const setAllProjects = (projects) => ({
  type: 'SET_ALL_PROJECTS',
  projects
});

export const setAllPalettes = (palettes) => ({
  type: 'SET_ALL_PALETTES',
  palettes
});
