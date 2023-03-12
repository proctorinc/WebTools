import { useMemo } from "react";
import { CODE_GENERATOR_TOOL, DATA_TOOL, MISC_TOOL } from "../constants";
import { BaseEncoderTool } from "../features/BaseEncoder";
import { ColorPickerTool } from "../features/ColorPicker";
import { JsonPrettyTool } from "../features/PrettyJson";

export const useTools = () => {
  const tools = [BaseEncoderTool, ColorPickerTool, JsonPrettyTool];

  const categorizedTools = useMemo(
    () => [
      {
        title: DATA_TOOL,
        tools: tools.filter((tool) => tool.type === DATA_TOOL),
      },
      {
        title: CODE_GENERATOR_TOOL,
        tools: tools.filter((tool) => tool.type === CODE_GENERATOR_TOOL),
      },
      {
        title: MISC_TOOL,
        tools: tools.filter((tool) => tool.type === MISC_TOOL),
      },
    ],
    []
  );

  return {
    tools,
    categorizedTools,
  };
};
