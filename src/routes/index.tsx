import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {  useAppDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  // const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen, setDrawerOptions } = useAppDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página inicial',
        icon: 'home',
        path: '/home'
      },
      {
        label: 'Clientes',
        icon: 'person',
        path: '/client'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/home"
        element={
          <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
            Abre menu
          </Button>
        }
      />
      
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
