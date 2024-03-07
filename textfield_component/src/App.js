import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0
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

      <form style={{ display: "flex", flexDirection: 'column' }} onSubmit={handleSubmit}>
        <TextField
          name="name"
          onChange={handleChange}
          value={inputs.name} type={'text'} sx={{ margin: 3 }} placeholder='Enter your name' variant='outlined' />

        <TextField
          name='email'
          value={inputs.email}
          onChange={handleChange}
          type={'email'} sx={{ margin: 3 }} placeholder='Enter your Email' variant='outlined' />

        <TextField
          name="password"
          value={inputs.password}
          onChange={handleChange}

          type={'password'} sx={{ margin: 3 }} placeholder='Enter your Password' variant='outlined' />

        <FormGroup name='checkbox'>
          <FormControlLabel control={<Checkbox onChange={() => setInputs((prev) => ({
            ...prev,
            subscribe: !inputs.subscribe
          }))} />} label="" />
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
          name='age'
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
