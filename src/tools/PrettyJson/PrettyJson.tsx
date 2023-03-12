import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Slider,
  Toolbar,
  Typography,
} from "@mui/material";
import { SwapHorizontalCircle, SwapVerticalCircle } from "@mui/icons-material";
import { ErrorBanner } from "./ErrorBanner";
import { JsonInput } from "./JsonInput";
import { copyToClipboard } from "../../utils";

export const PrettyJson = () => {
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
      <Toolbar
        sx={{ justifyContent: "space-evenly", alignItems: "center", gap: 5 }}
      >
        <Box
          display="flex"
          gap={2}
          justifyContent="center"
          alignItems="center"
          width={"50%"}
        >
          <Typography>Spacing: {spacing}</Typography>
          <Slider
            sx={{ width: "50%" }}
            aria-label="spacing"
            marks
            min={0}
            max={5}
            value={spacing}
            onChange={handleSpacingChange}
          />
        </Box>
        <Box display="flex" gap={0} justifyContent="center" alignItems="center">
          <Typography>Orientation:</Typography>
          <IconButton color="primary" onClick={toggleLayout}>
            {horizontalLayout ? (
              <SwapVerticalCircle />
            ) : (
              <SwapHorizontalCircle />
            )}
          </IconButton>
        </Box>
      </Toolbar>
      <ErrorBanner message={error} />
      <Grid container spacing={2}>
        <Grid
          display="flex"
          flexDirection="column"
          item
          xs={horizontalLayout ? 6 : 12}
          width="100%"
        >
          <JsonInput
            label="Input"
            json={userJson}
            onChange={handleInputChange}
            error={error}
          />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          item
          xs={horizontalLayout ? 6 : 12}
          width="100%"
        >
          <JsonInput label="Output" json={prettyJson} disabled />
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
