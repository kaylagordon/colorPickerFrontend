import { addPalette, addProject, deletePalette, deleteProject, setAllProjects, setAllPalettes } from './index';

describe('actions', () => {

  it('should have a type of ADD_PALETTE', () => {
    const mockPalette = {
      name: 'test',
      project_id: 2,
      color1: 'FFF',
      color2: 'FFF',
      color3: 'FFF',
      color4: 'FFF',
      color5: 'FFF',
      id: 3
    };

    const expectedAction = {
      type: 'ADD_PALETTE',
      palette: {
        name: 'test',
        project_id: 2,
        color1: 'FFF',
        color2: 'FFF',
        color3: 'FFF',
        color4: 'FFF',
        color5: 'FFF',
        id: 3
      }
    };

    const result = addPalette(mockPalette);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of ADD_PROJECT', () => {
    const expectedAction = {
      type: 'ADD_PROJECT',
      project: {
        name: 'test',
        id: 3
      }
    };

    const result = addProject('test', 3);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of DELETE_PALETTE', () => {
    const expectedAction = {
      type: 'DELETE_PALETTE',
      id: 3
    };

    const result = deletePalette(3);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of DELETE_PROJECT', () => {
    const expectedAction = {
      type: 'DELETE_PROJECT',
      id: 3
    };

    const result = deleteProject(3);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_ALL_PROJECTS', () => {
    let projects = [{name: 'test1', id: 1}, {name: 'test2', id: 2}]

    const expectedAction = {
      type: 'SET_ALL_PROJECTS',
      projects
    };

    const result = setAllProjects(projects);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of SET_ALL_PALETTES', () => {
    let palettes = [{
      name: 'test1',
      project_id: 2,
      color1: 'FFF',
      color2: 'FFF',
      color3: 'FFF',
      color4: 'FFF',
      color5: 'FFF',
      id: 1
    }, {
      name: 'test2',
      project_id: 2,
      color1: 'CCC',
      color2: 'CCC',
      color3: 'CCC',
      color4: 'CCC',
      color5: 'CCC',
      id: 2
    }]

    const expectedAction = {
      type: 'SET_ALL_PALETTES',
      palettes
    };

    const result = setAllPalettes(palettes);

    expect(result).toEqual(expectedAction);
  });
});
