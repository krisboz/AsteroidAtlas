import { create } from "zustand";

const useAsteroidPageStore = create((set) => ({
  asteroidPageData: {},
  setAsteroidPageData: (id, data) =>
    set((state) => ({
      asteroidPageData: {
        ...state.asteroidPageData,
        [id]: data,
      },
    })),
}));

export default useAsteroidPageStore;
