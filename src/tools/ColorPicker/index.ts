import { PaletteTwoTone } from "@mui/icons-material";
import { DATA_TOOL } from "../../constants";
import { ColorPicker } from "./ColorPicker";

export const ColorPickerTool = {
  type: DATA_TOOL,
  title: "Color Picker",
  path: "/color-picker",
  description:
    "Select, customize, and tweak colors in Hex, RGB, HSL, and HSV formats",
  icon: PaletteTwoTone,
  content: ColorPicker,
};
