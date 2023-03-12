import { Paper, Typography, useTheme } from "@mui/material";

type ErrorBannerProps = {
  message: string;
};

export const ErrorBanner = (props: ErrorBannerProps) => {
  const { message } = props;
  const theme = useTheme();

  return (
    <>
      {message && (
        <Paper
          variant="outlined"
          sx={{
            p: 1,
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main,
            backgroundColor: theme.palette.error.contrastText,
          }}
        >
          <Typography>{message}</Typography>
        </Paper>
      )}
    </>
  );
};
