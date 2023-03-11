import { useState } from "react";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Container,
  CssBaseline,
  Paper,
  Stack,
  SvgIconProps,
  Typography,
} from "@mui/material";
import { useTools } from "../../hooks/useTools";
import { Sidebar } from "../Sidebar";

export const AppLayout = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  const { firstTool } = useTools({ urlParameter: params.tool });

  const [selected, setSelected] = useState(firstTool);

  const drawerWidth = 240;

  const handleSelectTool = (tool: Tool) => {
    setSelected(tool);
    navigate({
      pathname: "/",
      search: `?${createSearchParams({
        tool: tool.url,
      })}`,
    });
  };

  type Tool = {
    title: string;
    url: string;
    description: string;
    icon: React.ReactElement<SvgIconProps>;
    content: JSX.Element;
  };

  return (
    <Container>
      <CssBaseline />
      <Sidebar selectedTool={selected} selectTool={handleSelectTool} />
      <Stack
        sx={{
          flexGrow: 1,
          overflowY: "scroll",
        }}
      >
        <Stack
          top={0}
          gap={1}
          paddingBottom={2}
          paddingTop={5}
          paddingX={5}
          width={`calc(100% - ${drawerWidth}px)`}
          marginLeft={`${drawerWidth}px`}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h3">
            {selected.title}
          </Typography>
          {selected.description && (
            <Paper
              variant="outlined"
              sx={{ width: "fit-content", px: 2, py: 1 }}
            >
              <Typography paragraph>{selected.description}</Typography>
            </Paper>
          )}
        </Stack>
        <Box
          display="flex"
          flexDirection="column"
          paddingX={5}
          paddingTop={0}
          paddingBottom={10}
          width={`calc(100% - ${drawerWidth}px)`}
          marginLeft={`${drawerWidth}px`}
        >
          {selected.content}
        </Box>
      </Stack>
    </Container>
  );
};
