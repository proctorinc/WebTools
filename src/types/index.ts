import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export type Tool = {
  type: string;
  title: string;
  path: string;
  description: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  content: () => JSX.Element;
};

export type ToolCategory = {
  title: string;
  tools: Tool[];
};
