import { DataObjectTwoTone } from "@mui/icons-material";
import { DATA_TOOL } from "../../constants";
import { PrettyJson } from "./PrettyJson";

export const JsonPrettyTool = {
  type: DATA_TOOL,
  title: "JSON Prettifier",
  path: "/json-prettifier",
  description:
    "Formats valid JSON into pretty output. Change the formatting parameters and copy to clipboard!",
  icon: DataObjectTwoTone,
  content: PrettyJson,
};
