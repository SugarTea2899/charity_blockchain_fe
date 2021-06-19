import { LOAD_EXPLORE_DONATION, LOAD_EXPLORE_PROJECT, ON_LOAD_EXPLORE_DONATION, ON_LOAD_EXPLORE_PROJECT, ON_PAGE_LOAD } from "./constants";

export const onPageLoad = () => ({
  type: ON_PAGE_LOAD,
});

export const loadExploreProject = (projects) => ({
  type: LOAD_EXPLORE_PROJECT,
  projects
});

export const loadExploreDonation = (donations) => ({
  type: LOAD_EXPLORE_DONATION,
  donations
});

export const onLoadExploreProject = () => ({
  type: ON_LOAD_EXPLORE_PROJECT
});

export const onLoadExploreDonation = () => ({
  type: ON_LOAD_EXPLORE_DONATION,
});