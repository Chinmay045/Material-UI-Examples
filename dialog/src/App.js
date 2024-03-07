import { useState } from 'react';
import './App.css';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>This is my Dialog</DialogTitle>
        <DialogContent>
          <DialogContentText>
            A Dialog is pop up window which can ask something for actions
          </DialogContentText>

        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel 1</Button>
          <Button onClick={() => setOpen(false)}>Cancel 2</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
