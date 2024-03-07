import { TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          onChange={handleChange}
          value={inputs.name} type={'text'} sx={{ margin: 3 }} placeholder='Enter your name' variant='outlined' />

        <TextField
          name='email'
          value={inputs.email}
          type={'email'} sx={{ margin: 3 }} placeholder='Enter your Email' variant='outlined' />

        <TextField
          name="password"
          value={inputs.password}
          type={'password'} sx={{ margin: 3 }} placeholder='Enter your Password' variant='outlined' />

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
