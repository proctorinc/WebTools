import { ArrowForwardIos, Handyman } from "@mui/icons-material";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SvgIconProps,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useTools } from "../../hooks/useTools";

type Tool = {
  title: string;
  description: string;
  icon: React.ReactElement<SvgIconProps>;
  content: JSX.Element;
};

type SidebarProps = {
  selectTool: Function;
  selectedTool: Tool;
};

export const Sidebar = (props: SidebarProps) => {
  const theme = useTheme();
  const { tools } = useTools({ urlParameter: undefined });
  const { selectTool, selectedTool } = props;

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
      {tools.map((category) => (
        <List key={category.title} dense disablePadding>
          <List dense>
            <ListSubheader
              sx={{
                backgroundColor: "transparent",
                color: theme.palette.secondary.light,
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{ py: 1, fontWeight: "bold" }}
              >
                {category.title}
              </Typography>
            </ListSubheader>
            {category.tools.map((tool) => (
              <ListItem
                key={tool.title}
                sx={{ px: 1, width: drawerWidth, boxSizing: "border-box" }}
                disablePadding
              >
                <ListItemButton
                  sx={{ borderRadius: 2, px: 1 }}
                  selected={tool.title === selectedTool.title}
                  onClick={() => selectTool(tool)}
                >
                  <ListItemIcon
                    sx={{ minWidth: 30, color: theme.palette.secondary.light }}
                  >
                    {tool.icon}
                  </ListItemIcon>
                  <ListItemText primary={tool.title} />
                  <ArrowForwardIos sx={{ height: 10 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </List>
      ))}
    </Drawer>
  );
};
