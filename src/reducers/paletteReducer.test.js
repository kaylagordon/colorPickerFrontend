import { paletteReducer } from './paletteReducer';

describe('paletteReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = paletteReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_PALETTE', () => {
    const initialState = [];
    const palette = {
        name: 'test',
        project_id: 2,
        color1: 'FFF',
        color2: 'FFF',
        color3: 'FFF',
        color4: 'FFF',
        color5: 'FFF',
        id: 3
      };
    const expected = [palette];

    const action = {
      type: 'ADD_PALETTE',
      palette
    };

    const result = paletteReducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is DELETE_PALETTE', () => {
    const initialState = [{
        name: 'test1',
        project_id: 2,
        color1: 'FFF',
        color2: 'FFF',
        color3: 'FFF',
        color4: 'FFF',
        color5: 'FFF',
        id: 3
      }, {
          name: 'test2',
          project_id: 2,
          color1: 'CCC',
          color2: 'CCC',
          color3: 'CCC',
          color4: 'CCC',
          color5: 'CCC',
          id: 2
        }];
    const expected = [{
        name: 'test2',
        project_id: 2,
        color1: 'CCC',
        color2: 'CCC',
        color3: 'CCC',
        color4: 'CCC',
        color5: 'CCC',
        id: 2
      }];
    const id = 3;

    const action = {
      type: 'DELETE_PALETTE',
      id
    };

    const result = paletteReducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is SET_ALL_PALETTES', () => {
    const initialState = [];
    const expected = [{
        name: 'test1',
        project_id: 2,
        color1: 'FFF',
        color2: 'FFF',
        color3: 'FFF',
        color4: 'FFF',
        color5: 'FFF',
        id: 3
      }, {
          name: 'test2',
          project_id: 2,
          color1: 'CCC',
          color2: 'CCC',
          color3: 'CCC',
          color4: 'CCC',
          color5: 'CCC',
          id: 2
        }];
    const palettes = [{
        name: 'test1',
        project_id: 2,
        color1: 'FFF',
        color2: 'FFF',
        color3: 'FFF',
        color4: 'FFF',
        color5: 'FFF',
        id: 3
      }, {
          name: 'test2',
          project_id: 2,
          color1: 'CCC',
          color2: 'CCC',
          color3: 'CCC',
          color4: 'CCC',
          color5: 'CCC',
          id: 2
        }];

    const action = {
      type: 'SET_ALL_PALETTES',
      palettes
    };

    const result = paletteReducer(initialState, action);

    expect(result).toEqual(expected);
  });
});
