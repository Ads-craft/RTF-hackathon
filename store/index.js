import { create } from "zustand";


export const useRTFStore = create((set) => ({
  isAuth: true,
  isDarkmode: true,
  setIsDarkmode: () => {
    set((state) => ({
      isDarkmode: !state.isDarkmode
    }))
  }
}));
