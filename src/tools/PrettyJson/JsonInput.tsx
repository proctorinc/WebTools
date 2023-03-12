import { ChangeEventHandler } from "react";
import { TextareaAutosize, Typography, useTheme } from "@mui/material";

type JsonInputProps = {
  label: string;
  json: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  disabled?: boolean;
};

export const JsonInput = (props: JsonInputProps) => {
  const { label, error, json, onChange, disabled = false } = props;
  const theme = useTheme();
  return (
    <>
      <label htmlFor={`${label}-input`}>
        <Typography variant="subtitle1" paddingY={1}>
          {label}:
        </Typography>
      </label>
      <TextareaAutosize
        id={`${label}-input`}
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
