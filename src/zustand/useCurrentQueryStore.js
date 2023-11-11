import { create } from "zustand";

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
