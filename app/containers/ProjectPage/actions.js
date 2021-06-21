import { GET_PROJECTS, UPDATE_PROJECTS } from './constants';

export const getProject = () => ({
  type: GET_PROJECTS,
});

export const updateProject = projects => ({
  type: UPDATE_PROJECTS,
  projects,
});
