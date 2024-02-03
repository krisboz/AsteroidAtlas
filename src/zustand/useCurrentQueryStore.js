import { create } from "zustand";
//Central state for saving API query values
const useCurrentQueryStore = create((set) => ({
  currQuery: {},
  setCurrQuery: (data) =>
    set(() => ({
      currQuery: data,
    })),
  resetQuery: () =>
    set(() => ({
      currQuery: {},
    })),
}));

export default useCurrentQueryStore;
