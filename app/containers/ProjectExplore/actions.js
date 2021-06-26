import { LOAD_PROJECT_DONATIONS, UPDATE_PROJECT_DONATIONS } from "./constants";

export const loadProjectDonations = (address) => ({
  type: LOAD_PROJECT_DONATIONS,
  address
})

export const updateProjectDonations = (donations) => ({
  type: UPDATE_PROJECT_DONATIONS,
  donations
});
