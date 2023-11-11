import { create } from "zustand";

const useAsteroidListStore = create((set) => ({
  asteroidListData: {},
  setAsteroidListData: (data) =>
    set((state) => ({
      asteroidListData: {
        ...state.asteroidListData,
        data,
      },
    })),
  resetAsteroidListData: () =>
    set((state) => ({ asteroidListData: state.initialAsteroidListData })),
}));

export default useAsteroidListStore;
