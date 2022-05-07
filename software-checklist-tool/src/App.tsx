import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Center, ColorScheme, ColorSchemeProvider, Global, MantineProvider, NormalizeCSS } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import HeaderResponsive from "./pages/Layout"
import Home from './pages/Home';

function App() {

  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const prefferedTheme = userPrefersDark ? 'dark' : 'light'
  const [colorScheme, setColorScheme] = useState<ColorScheme>(prefferedTheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{
        colorScheme,
        colors: { brand: ['#801436', '#7d5360', '#801436', '#7d5360', '#801436', '#7d5360', '#801436', '#7d5360', '#801436', '#7d5360',], shade: ['#f8f9fa'] },
        black: '#27282c',
        white: '#fff',
        loader: 'dots',
        datesLocale: 'de',
        primaryColor: 'cyan'
      }}>
        <Global
          styles={(theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
            },
            body: {
              ...theme.fn.fontStyles(),
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
              color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
              lineHeight: theme.lineHeight,
            },
          })}
        />
        <NormalizeCSS />
        <NotificationsProvider autoClose={10000}>
          <HeaderResponsive links={[{ label: 'Home', link: '/' }]} />
          <Center>
            <Home />
          </Center>

        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
