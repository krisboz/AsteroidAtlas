import { create } from "zustand";

const useScrollStore = create((set) => ({
  scrollY: 0,
  setScrollY: (scrollY) => set({ scrollY }),
}));

export default useScrollStore;
