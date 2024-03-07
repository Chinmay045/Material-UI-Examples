import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const [value, setValue] = useState();
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Tabs value={value}
            textColor='secondary'
            onChange={(e, val) => setValue(val)}>
            <Tab label="first" />
            <Tab label="second" />
            <Tab label="third" />
          </Tabs>
        </Toolbar>
      </AppBar>

    </div>
  );
}

export default App;
