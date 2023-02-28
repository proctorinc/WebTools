import { ArrowForwardIos, Handyman, Inbox, Mail } from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
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
} from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;

const CATEGORIES = [
  {
    title: "Data Tools",
    tools: [
      {
        title: "Color Picker",
        icon: <Mail sx={{ height: 20 }} />,
        content: <div>Color Picker</div>,
      },
      {
        title: "Base Encoder",
        icon: <Inbox sx={{ height: 20 }} />,
        content: <div>Base Encoder</div>,
      },
      {
        title: "JSON Prettifier",
        icon: <Mail sx={{ height: 20 }} />,
        content: <div>JSON Prettifier</div>,
      },
    ],
  },
  {
    title: "Code Generators",
    tools: [
      {
        title: "CSS Gradients",
        icon: <Inbox sx={{ height: 20 }} />,
        content: <div>CSS Gradients</div>,
      },
      {
        title: "Tailwind Theme",
        icon: <Mail sx={{ height: 20 }} />,
        content: <div>Tailwind Theme</div>,
      },
    ],
  },
  {
    title: "Misc",
    tools: [
      {
        title: "Image Cropper",
        icon: <Mail sx={{ height: 20 }} />,
        content: <div>Image Cropper</div>,
      },
      {
        title: "Background Remover",
        icon: <Inbox sx={{ height: 20 }} />,
        content: <div>Background Remover</div>,
      },
    ],
  },
];

type Tool = {
  title: string;
  icon: React.ReactElement<SvgIconProps>;
  content: JSX.Element;
};

function App() {
  const [selected, setSelected] = useState(CATEGORIES[0].tools[0]);

  const handleClick = (tool: Tool) => {
    setSelected(tool);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="default"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          boxShadow: "none",
          borderBottom: "1px solid inherit",
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            pt: 10,
            pb: 3,
            px: 0,
          }}
        >
          <Typography variant="h3">{selected.title}</Typography>
          <Typography paragraph>This is a tool that does stuff...</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Handyman />
          <Typography variant="h5" padding={2}>
            Mattools
          </Typography>
        </Toolbar>
        {CATEGORIES.map((category) => (
          <List key={category.title} dense disablePadding>
            <List sx={{ p: 1 }} dense>
              <ListSubheader>
                <Typography variant="subtitle1" sx={{ py: 1 }}>
                  {category.title}
                </Typography>
              </ListSubheader>
              {category.tools.map((tool) => (
                <ListItem key={tool.title} sx={{ px: 1 }} disablePadding>
                  <ListItemButton
                    sx={{ borderRadius: 2, px: 1 }}
                    selected={tool.title === selected.title}
                    onClick={() => handleClick(tool)}
                  >
                    <ListItemIcon sx={{ minWidth: 40 }}>
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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {selected.content}
      </Box>
    </Box>
  );
}

export default App;
