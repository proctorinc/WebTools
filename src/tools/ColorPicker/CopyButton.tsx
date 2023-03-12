import { CopyAll } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { copyToClipboard } from "../../utils";

type CopyButtonProps = {
  value: string;
};

export const CopyButton = (props: CopyButtonProps) => {
  const { value } = props;

  return (
    <InputAdornment position="end">
      <IconButton onClick={() => copyToClipboard(value)}>
        <CopyAll />
      </IconButton>
    </InputAdornment>
  );
};
