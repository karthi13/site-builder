import { createTheme } from "@mantine/core";
import {
  BLUE_COLOURS,
  GREEN_COLOURS,
  LIME_COLOURS,
  MAGENTA_COLOURS,
  ORANGE_COLOURS,
  PURPLE_COLOURS,
  RED_COLOURS,
  TEAL_COLOURS,
  YELLOW_COLOURS,
} from "./ColorPalette";

const theme = createTheme({
  colors: {
    lime: LIME_COLOURS,
    red: RED_COLOURS,
    orange: ORANGE_COLOURS,
    yellow: YELLOW_COLOURS,
    green: GREEN_COLOURS,
    teal: TEAL_COLOURS,
    blue: BLUE_COLOURS,
    purple: PURPLE_COLOURS,
    pink: MAGENTA_COLOURS,
  },
});

export default theme;
