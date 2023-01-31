
import { ColorModeContext, useMode } from './theme';
import {CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from ".scenes_admin/global/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider.Provider value={theme}>
        <CssBaseline/>
    <div className="app__admin">
      <main className='content_admin'>
        <Topbar/>
      </main>
      
    </div>
    </ThemeProvider.Provider>
    </ColorModeContext.Provider>
  );
}

export default App;
