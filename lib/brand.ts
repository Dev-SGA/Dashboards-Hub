/** SGA brand manual (2023) — primary palette and typography tokens. */
export const SGA_COLORS = {
  navy: "#072334",
  blue: "#297cc1",
  blueDeep: "#044f80",
  white: "#ffffff",
} as const;

export const SGA_FONTS = {
  ui: '"Source Sans 3", "Source Sans Pro", "Trebuchet MS", sans-serif',
  display: '"Good Times", "Source Sans 3", sans-serif',
} as const;

export const BRAND = {
  name: "SGA Performance",
  legal: "Soccer Growth Analytics",
  slogan: "Greatness Can Be Achieved",
  logos: {
    horizontal: "/brand/sga-logo-horizontal.png",
    vertical: "/brand/sga-logo-vertical.png",
    symbol: "/brand/sga-logo-symbol.png",
  },
  logoTrimmed: "/brand/sga-logo-horizontal-trim.png",
} as const;
