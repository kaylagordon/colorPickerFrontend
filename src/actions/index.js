export const addPalette = (id, color1, color2, color3, color4, color5, name, project_id) => ({
  type: 'ADD_PALETTE',
  palette: {
    id,
    color1,
    color2,
    color3,
    color4,
    color5,
    name,
    project_id
  }
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