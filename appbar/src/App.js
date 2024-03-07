import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <AppBar variant='outlined'>
        <Toolbar>
          <Typography>LOGO</Typography>
          <button sx={{ marginLeft: "auto" }} color='warning'>Login</button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
