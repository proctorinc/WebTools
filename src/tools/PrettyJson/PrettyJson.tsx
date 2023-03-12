import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Slider,
  Stack,
  TextareaAutosize,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { SwapHorizontalCircle, SwapVerticalCircle } from "@mui/icons-material";
import { copyToClipboard } from "../../utils";

export const PrettyJson = () => {
  const theme = useTheme();
  const [userJson, setUserJson] = useState("{}");
  const [prettyJson, setPrettyJson] = useState("{}");
  const [spacing, setSpacing] = useState(2);
  const [horizontalLayout, setHorizontalLayout] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const userInput = event.target.value;
    if (userInput === "") {
      setUserJson("");
      setPrettyJson("");
      setError("");
      return;
    }
    setUserJson(userInput);
    formatPrettyPrint(userInput);
  };

  const formatPrettyPrint = (userInput: string) => {
    try {
      const json = JSON.parse(userInput);
      const pretty = JSON.stringify(json, null, spacing);
      setPrettyJson(pretty);
      if (error) {
        setError("");
      }
    } catch (error) {
      setError(`Invalid JSON: ${(error as Error).message}`);
    }
  };

  const handleSpacingChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (Array.isArray(newValue)) {
      return;
    }
    setSpacing(newValue);
    formatPrettyPrint(userJson);
  };

  const toggleLayout = () => {
    setHorizontalLayout((previous) => !previous);
  };

  return (
    <>
      <Toolbar sx={{ justifyContent: "center", alignItems: "center", gap: 5 }}>
        <Stack width={"50%"}>
          <label>Spacing: {spacing}</label>
          <Slider
            aria-label="spacing"
            marks
            min={0}
            max={5}
            value={spacing}
            onChange={handleSpacingChange}
          />
        </Stack>
        <IconButton
          sx={{ position: "absolute", right: 0 }}
          color="primary"
          onClick={toggleLayout}
        >
          {horizontalLayout ? <SwapVerticalCircle /> : <SwapHorizontalCircle />}
        </IconButton>
      </Toolbar>
      {error && (
        <Paper
          variant="outlined"
          sx={{
            p: 1,
            color: theme.palette.error.main,
            borderColor: theme.palette.error.main,
            backgroundColor: theme.palette.error.contrastText,
          }}
        >
          <Typography>{error}</Typography>
        </Paper>
      )}
      <Grid container spacing={2}>
        <Grid
          display="flex"
          flexDirection="column"
          item
          xs={horizontalLayout ? 6 : 12}
          width="100%"
        >
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
            minRows={10}
            maxRows={25}
            value={userJson}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          item
          xs={horizontalLayout ? 6 : 12}
          width="100%"
        >
          <label htmlFor="output">
            <Typography variant="subtitle1" paddingY={1}>
              Output:
            </Typography>
          </label>
          <TextareaAutosize
            id="output"
            disabled={true}
            style={{
              resize: "none",
              borderRadius: 8,
              padding: 10,
            }}
            minRows={10}
            maxRows={25}
            value={prettyJson}
          />
          <Box display="flex" justifyContent="center">
            <Button
              disabled={error !== "" || prettyJson.length <= 2}
              variant="contained"
              sx={{ marginTop: 1, maxWidth: 200 }}
              onClick={() => copyToClipboard(prettyJson)}
            >
              Copy
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
