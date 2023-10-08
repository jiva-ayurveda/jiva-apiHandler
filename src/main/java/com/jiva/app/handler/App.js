import Pace from "pace";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { pink } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";
import theme from "themes";
import { Provider } from "react-redux";
import { store } from "store";
import MainPage from "main";

// defaultTheme

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme()}>
        <CssBaseline />
        <Pace color={pink[600]} />
        <Provider store={store}>
          <MainPage />
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
