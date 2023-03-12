import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBody } from "./components/App";
import { Sidebar } from "./components/Sidebar";
import { AppRoutes } from "./routes";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#5411d1",
      },
      secondary: {
        main: "#20252e",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Sidebar />
        <AppBody>
          <AppRoutes />
        </AppBody>
      </Router>
    </ThemeProvider>
  );
}

export default App;
