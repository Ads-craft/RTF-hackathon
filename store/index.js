import { create } from "zustand";

export const useRTFStore = create((set) => ({
  isAuth: false,
  isDarkmode: true,
  setIsDarkmode: () => {
    set((state) => ({
      isDarkmode: !state.isDarkmode,
    }));
  },
  setAuth: (auth) => {
    set((state) => ({
      isAuth: auth,
    }));
  },
}));
