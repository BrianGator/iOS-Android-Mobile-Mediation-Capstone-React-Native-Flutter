// Written by Brian McCarthy

export const COLORS = {
  primary: "#FE7654",       // Orange color accent
  secondary: "#444262",     // Deep purple slate
  tertiary: "#FF7754",
  gray: "#83829A",
  gray2: "#C1C0C9",
  lightWhite: "#FAFAFC",
  white: "#FFF",
  darkBackground: "#1A1A2E",
  darkText: "#FFFFFF",
  lightText: "#333333",
};

export const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

export const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

export const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};
export default { COLORS, FONT, SIZES, SHADOWS };
