export const Palette = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PALETTE':
      return [...state, action.palette];
    case 'DELETE_PALETTE':
      return [...state].filter(palette => palette.id !== action.id);
    default:
      return state;
  }
};