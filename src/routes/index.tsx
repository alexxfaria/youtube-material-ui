import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import {  useAppDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  // const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen } = useAppDrawerContext();
  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
            Troca de tema
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};
