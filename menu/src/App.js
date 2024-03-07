import { Menu, MenuItem } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [anchorElm, setAnchorElm] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setAnchorElm(null);
    setOpen(false);
  }

  const handleClick = (e) => {
    setAnchorElm(e.currentTarget);
    setOpen(true);
  };

  return (
    <div >
      <button variant="contained" onClick={handleClick} >Open Menu</button>
      <button onClick={handleClick}>OPEN MENU AGAIN</button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClose={handleClose}>Profile</MenuItem>
        <MenuItem onClose={handleClose}>Balance</MenuItem>
        <MenuItem onClose={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
