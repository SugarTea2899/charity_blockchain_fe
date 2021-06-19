import { LOAD_EXPLORE_DONATION, LOAD_EXPLORE_PROJECT } from "./constants";

export const initialState = {
  projects: [],
  donations: []
}

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EXPLORE_PROJECT:
      return {...state, projects: action.projects};
    case LOAD_EXPLORE_DONATION:
      return {...state, donations: action.donations};
    default:
      return state;
  }
}

export default exploreReducer;
