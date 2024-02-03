import { create } from "zustand";
//Central state for a flag that determines if the background animation should render or not
const useHideCometShower = create((set) => ({
  hideCometShower: false,
  toggleHideCometShower: () =>
    set((state) => ({ hideCometShower: !state.hideCometShower })),
}));

export default useHideCometShower;
