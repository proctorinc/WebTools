import { Inbox } from "@mui/icons-material";
import { DATA_TOOL } from "../../constants";
import { BaseEncoder } from "./BaseEncoder";

export const BaseEncoderTool = {
  type: DATA_TOOL,
  title: "Base-N Encoding",
  path: "/base-encoding",
  description: "",
  icon: Inbox,
  content: BaseEncoder,
};
