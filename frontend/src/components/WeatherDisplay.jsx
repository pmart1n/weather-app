import React from 'react';
import {Card, CardContent, Typography} from "@mui/material"

const WeatherDisplay = ({ weather }) => {
  if (!weather) {
    return <p>Las coordenadas son incorrectas. Por favor inserta coordenadas correctas.</p>;
  }

  return (
    <Card variant="outlined"  sx={{ maxWidth: 300 }}>
      <CardContent>
      <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
      Informacion del tiempo
        </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Temperatura: {weather.current.temp_c} °C
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Humedad: {weather.current.humidity}%
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Precipitaciones: {weather.current.precip_mm} mm
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Tiempo local: {weather.location.localtime}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Localizacion: {weather.location.name}, {weather.location.country} 
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;