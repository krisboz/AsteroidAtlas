import { create } from "zustand";

const useAsteroidListStore = create((set) => ({
  asteroidListData: {},
  setAsteroidListData: (date, data) =>
    set((state) => ({
      asteroidListData: {
        ...state.asteroidListData,
        [date]: data,
      },
    })),
}));

export default useAsteroidListStore;
