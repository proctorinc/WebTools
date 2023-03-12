import { ArrowForwardIos } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Tool } from "../../types";

type SideBarItemProps = {
  tool: Tool;
};

export const SidebarItem = (props: SideBarItemProps) => {
  const { tool } = props;
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const drawerWidth = 240;

  const ToolIcon = tool.icon;

  return (
    <ListItem
      key={tool.title}
      sx={{ px: 1, width: drawerWidth, boxSizing: "border-box" }}
      disablePadding
    >
      <ListItemButton
        sx={{ borderRadius: 2, px: 1 }}
        selected={tool.path === location.pathname}
        onClick={() => navigate(tool.path)}
      >
        <ListItemIcon
          sx={{
            minWidth: 30,
            color: theme.palette.secondary.light,
          }}
        >
          <ToolIcon sx={{ height: 20 }} />
        </ListItemIcon>
        <ListItemText primary={tool.title} />
        <ArrowForwardIos sx={{ height: 10 }} />
      </ListItemButton>
    </ListItem>
  );
};
