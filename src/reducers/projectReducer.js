export const Project = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      return [...state, action.project];
    case 'DELETE_PROJECT':
      return [...state].filter(project => project.id !== action.id);
    default:
      return state;
  }
};