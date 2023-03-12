import { Handyman } from "@mui/icons-material";
import { Drawer, Toolbar, Typography, useTheme } from "@mui/material";
import { useTools } from "../../hooks/useTools";
import { SidebarList } from "./SidebarList";

export const Sidebar = () => {
  const theme = useTheme();
  const { categorizedTools } = useTools();
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
      }}
      variant="permanent"
      anchor="left"
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.light,
          color: theme.palette.secondary.contrastText,
        },
      }}
    >
      <Toolbar>
        <Handyman />
        <Typography variant="h5" padding={2} sx={{ fontWeight: "bold" }}>
          Mattools
        </Typography>
      </Toolbar>
      {categorizedTools.map((category) => {
        if (category.tools.length > 0) {
          return <SidebarList key={category.title} category={category} />;
        }
      })}
    </Drawer>
  );
};
