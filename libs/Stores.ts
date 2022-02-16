import create from "zustand";

interface ITheme {
  isDark: boolean;
  isDarkSwitch: () => void;
}

export const useDarkMode = create<ITheme>((set) => {
  return {
    isDark: true,
    isDarkSwitch: () => {
      set(({ isDark }) => {
        return {
          isDark: !isDark,
        };
      });
    },
  };
});
