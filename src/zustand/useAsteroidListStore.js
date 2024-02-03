import { create } from "zustand";

//Central state for the fetched list of asteroids to avoid fetching on every rerender

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
