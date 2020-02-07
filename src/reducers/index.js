import { combineReducers } from 'redux';
import { Palette } from './paletteReducer';
import { Project } from './projectReducer'; 

export const rootReducer = combineReducers({
  palettes: Palette,
  projects: Project
});

export default rootReducer;
