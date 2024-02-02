import { create } from "zustand";

const useHideCometShower = create((set) => ({
  hideCometShower: false,
  toggleHideCometShower: () =>
    set((state) => ({ hideCometShower: !state.hideCometShower })),
}));

export default useHideCometShower;
