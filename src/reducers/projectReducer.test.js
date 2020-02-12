import { projectReducer } from './projectReducer';

describe('projectReducer', () => {
  it('should return the initial state', () => {
    const expected = [];

    const result = projectReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is ADD_PROJECT', () => {
    const initialState = [];
    const project = {
        name: 'test proj',
        id: 3
      };
    const expected = [project];

    const action = {
      type: 'ADD_PROJECT',
      project
    };

    const result = projectReducer(initialState, action);

    expect(result).toEqual(expected);
  });
//
  it('should return the correct state if the action is DELETE_PROJECT', () => {
    const initialState = [{
        name: 'test1',
        id: 3
      }, {
          name: 'test2',
          id: 2
        }];
    const expected = [{
        name: 'test2',
        id: 2
      }];
    const id = 3;

    const action = {
      type: 'DELETE_PROJECT',
      id
    };

    const result = projectReducer(initialState, action);

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is SET_ALL_PROJECTS', () => {
    const initialState = [];
    const expected = [{
        name: 'test1',
        id: 3
      }, {
          name: 'test2',
          id: 2
        }];
    const projects = [{
        name: 'test1',
        id: 3
      }, {
          name: 'test2',
          id: 2
        }];

    const action = {
      type: 'SET_ALL_PROJECTS',
      projects
    };

    const result = projectReducer(initialState, action);

    expect(result).toEqual(expected);
  });
});
