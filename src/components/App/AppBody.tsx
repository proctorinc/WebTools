import { Container, CssBaseline, Stack } from "@mui/material";

type AppBodyProps = {
  children: string | JSX.Element | JSX.Element[];
};

export const AppBody = (props: AppBodyProps) => {
  const { children } = props;
  const drawerWidth = 240;

  return (
    <Container>
      <CssBaseline />
      <Stack
        top={0}
        gap={1}
        paddingBottom={2}
        paddingTop={5}
        paddingX={5}
        width={`calc(100% - ${drawerWidth}px)`}
        marginLeft={`${drawerWidth}px`}
        sx={{
          flexGrow: 1,
          overflowY: "scroll",
        }}
      >
        {children}
      </Stack>
    </Container>
  );
};
