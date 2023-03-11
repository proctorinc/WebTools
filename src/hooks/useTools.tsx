import {
  CropTwoTone,
  DarkModeTwoTone,
  DataObjectTwoTone,
  GradientTwoTone,
  Inbox,
  PaletteTwoTone,
  WallpaperTwoTone,
} from "@mui/icons-material";
import { BaseEncoder, ColorPicker, PrettyJson } from "../features/data";

type useToolsProps = {
  urlParameter: string | undefined;
};

export const useTools = (props: useToolsProps) => {
  const { urlParameter } = props;

  const CATEGORIES = [
    {
      title: "Data Tools",
      tools: [
        {
          title: "JSON Prettifier",
          url: "json-prettifier",
          description:
            "Formats valid JSON into pretty output. Change the formatting parameters and copy to clipboard!",
          icon: <DataObjectTwoTone sx={{ height: 20 }} />,
          content: <PrettyJson />,
        },
        {
          title: "Color Picker",
          url: "color-picker",
          description:
            "Select, customize, and tweak colors in Hex, RGB, HSL, and HSV formats",
          icon: <PaletteTwoTone sx={{ height: 20 }} />,
          content: <ColorPicker />,
        },
        {
          title: "Base-N Encoding",
          url: "base-encoding",
          description: "",
          icon: <Inbox sx={{ height: 20 }} />,
          content: <BaseEncoder />,
        },
      ],
    },
    {
      title: "Code Generators",
      tools: [
        {
          title: "CSS Gradients",
          url: "css-gradients",
          description: "",
          icon: <GradientTwoTone sx={{ height: 20 }} />,
          content: <div>CSS Gradients</div>,
        },
        {
          title: "Tailwind Theme",
          url: "tailwind-theme",
          description: "",
          icon: <DarkModeTwoTone sx={{ height: 20 }} />,
          content: <div>Tailwind Theme</div>,
        },
      ],
    },
    {
      title: "Misc",
      tools: [
        {
          title: "Image Cropper",
          url: "image-cropper",
          description: "",
          icon: <CropTwoTone sx={{ height: 20 }} />,
          content: <div>Image Cropper</div>,
        },
        {
          title: "Background Remover",
          url: "background-remover",
          description: "",
          icon: <WallpaperTwoTone sx={{ height: 20 }} />,
          content: <div>Background Remover</div>,
        },
      ],
    },
  ];

  return {
    tools: CATEGORIES,
    firstTool: CATEGORIES[0].tools[0],
  };
};
