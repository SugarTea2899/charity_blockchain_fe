import { UPDATE_PROJECT_DONATIONS } from "./constants";

export const initialState = {
  donations: []
}

const ProjectExploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROJECT_DONATIONS:
      return {...state, donations: action.donations}
    default:
      return state;
  }
}

export default ProjectExploreReducer;
