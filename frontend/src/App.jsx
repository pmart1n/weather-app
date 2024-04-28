import React, { useState } from 'react';
import WeatherForm from './components/WeatherForm';
import WeatherDisplay from './components/WeatherDisplay.jsx';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [weather, setWeather] = useState(null);

  const handleWeatherSubmit = async (lat, lon) => {
    try {
        const response = await fetch(`http://localhost:8080/weather?lat=${lat}&lon=${lon}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeather(data);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
};

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Aplicacion del tiempo</h1>
      <WeatherForm onSubmit={handleWeatherSubmit} />
      <WeatherDisplay weather={weather} />
    </div>
    </ThemeProvider>
  );
};

export default App;