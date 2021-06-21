import { UPDATE_PROJECTS } from './constants';

export const initialState = {
  list: [],
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECTS:
      return { ...state, list: action.projects };
    default:
      return state;
  }
};

export default projectsReducer;
