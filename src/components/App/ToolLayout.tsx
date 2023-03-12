import { Box, Paper, Stack, Typography } from "@mui/material";
import { Tool } from "../../types";

type ToolLayoutProps = {
  tool: Tool;
};

export const ToolLayout = (props: ToolLayoutProps) => {
  const { tool } = props;

  const ToolContent = tool.content;

  return (
    <>
      <Stack>
        <Typography sx={{ fontWeight: "bold" }} variant="h3">
          {tool.title}
        </Typography>
        {tool.description && (
          <Paper variant="outlined" sx={{ width: "fit-content", px: 2, py: 1 }}>
            <Typography paragraph>{tool.description}</Typography>
          </Paper>
        )}
      </Stack>
      <Box display="flex" flexDirection="column">
        <ToolContent />
      </Box>
    </>
  );
};
