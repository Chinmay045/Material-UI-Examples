import { TextField } from '@mui/material';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextField type={'text'} sx={{ margin: 3 }} placeholder='Enter your name' variant='outlined' />
      <TextField type={'email'} sx={{ margin: 3 }} placeholder='Enter your Email' variant='outlined' />
      <TextField type={'password'} sx={{ margin: 3 }} placeholder='Enter your Password' variant='outlined' />
    </div>
  );
}

export default App;
