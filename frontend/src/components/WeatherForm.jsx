import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(latitude, longitude);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <TextField sx={{ marginBottom: 2 }}size='small' label="Latitud" variant="outlined" 
          type="text"
          id="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Introduce latitud"
          required
          />
      </div>
      <div>
        <TextField sx={{ marginBottom: 2 }} size='small' label="Longitud" variant="outlined" 
          type="text"
          id="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Introduce longitud"
          required
          />
      </div>
      <Button  sx={{ marginBottom: 2 }} type='submit' variant="contained">Obtener el tiempo</Button>
    </form>
  );
};

export default WeatherForm;