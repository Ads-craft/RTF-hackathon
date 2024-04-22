import { create } from "zustand";

export const useRTFStore = create((set) => ({
  isAuth: false,
  isDarkmode: true,
  nftcreation_stage: 1,
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

  setIsDarkmode: () => {
    set((state) => ({
      isDarkmode: !state.isDarkmode,
    }));
  },

  setNFTCreationStage: (stage) => {
    set({ nftcreation_stage: stage });
  },
}));
