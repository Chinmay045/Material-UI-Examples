import logo from './logo.svg';
import './App.css';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';

function App() {
  const array = ["First", "Second", "Third", "Fourth", "Fifth"]
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <List>
        <ListItemButton divider onClick={() => setOpen(true)}>
          <ListItemIcon >
            {">"}
          </ListItemIcon>
          <ListItemText primary={"Open last"}>
          </ListItemText>
        </ListItemButton>
      </List>
      <Collapse in={open}>
        <List sx={{ width: 300, background: "grey" }}>
          {array.map((listElm) => (
            <ListItemButton divider onClick={() => setOpen(false)}>
              <ListItemIcon>
                {">"}
              </ListItemIcon>
              <ListItemText primary={listElm}>
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div >
  );
}

export default App;
