import { create } from "zustand";

const useAsteroidsStore = create((set) => ({
  asteroidsState: {},
  addAsteroid: (dayData) =>
    set((state) => {
      // Assuming dayData is an object with a date key
      const date = dayData.date;

      return {
        asteroidsState: {
          ...state.asteroidsState,
          [date]: state.asteroidsState[date]
            ? [...state.asteroidsState[date], dayData]
            : [dayData],
        },
      };
    }),
}));

export default useAsteroidsStore;
