import { ON_PAGE_LOAD, UPDATE_DONATIONS_LIST } from "./constants";

export const onPageLoad = () => ({
  type: ON_PAGE_LOAD,
});

export const updateDonationsList = (donations) => ({
  type: UPDATE_DONATIONS_LIST,
  donations
})