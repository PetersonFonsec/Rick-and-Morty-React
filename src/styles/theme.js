import {
  black,
  blue,
  fontFamily,
  grid,
  transition,
  white,
  yellow,
  zIndexLg,
  zIndexMd,
  zIndexSm,
} from "./variables";

export const litghTheme = {
  primary: blue,
  secondary: yellow,
  textColor: black,
  textColorContrast: white,
  background: white,

  /* Grid */
  grid: grid,

  /* Transition */
  transition: transition,

  /* Layers */
  menu: zIndexSm,
  modal: zIndexMd,
  loading: zIndexLg,

  /* fonts */
  fontFamily: fontFamily,
};

export const darkTheme = {
  ...litghTheme,

  primary: yellow,
  secondary: blue,
  textColor: white,
  background: black,
};
