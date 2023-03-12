import { List, ListSubheader, Typography, useTheme } from "@mui/material";
import { ToolCategory } from "../../types";
import { SidebarItem } from "./SidebarItem";

type SidebarListProps = {
  category: ToolCategory;
};

export const SidebarList = (props: SidebarListProps) => {
  const { category } = props;
  const theme = useTheme();

  return (
    <List key={category.title} dense disablePadding>
      <List dense>
        <ListSubheader
          sx={{
            backgroundColor: "transparent",
            color: theme.palette.secondary.light,
          }}
        >
          <Typography variant="subtitle1" sx={{ py: 1, fontWeight: "bold" }}>
            {category.title}
          </Typography>
        </ListSubheader>
        {category.tools.map((tool) => (
          <SidebarItem key={tool.title} tool={tool} />
        ))}
      </List>
    </List>
  );
};
