import { ChangeEventHandler } from "react";
import { TextareaAutosize, Typography, useTheme } from "@mui/material";

type JsonInputProps = {
  json: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  disabled?: boolean;
};

export const JsonInput = (props: JsonInputProps) => {
  const { error, json, onChange, disabled = false } = props;
  const theme = useTheme();
  return (
    <>
      <label htmlFor="input">
        <Typography variant="subtitle1" paddingY={1}>
          Input:
        </Typography>
      </label>
      <TextareaAutosize
        id="input"
        style={{
          resize: "none",
          borderRadius: 8,
          padding: 10,
          borderColor: error && theme.palette.error.main,
          outlineColor: error
            ? theme.palette.error.main
            : theme.palette.primary.main,
        }}
        disabled={disabled}
        minRows={10}
        maxRows={25}
        value={json}
        onChange={onChange}
      />
    </>
  );
};
