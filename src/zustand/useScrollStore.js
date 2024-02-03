import { create } from "zustand";
//Central state for keeping track of the scroll value, mainly for background parallax effect

const useScrollStore = create((set) => ({
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
}));

export default useScrollStore;
