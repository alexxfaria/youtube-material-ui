import { createTheme } from '@mui/material'
import { cyan, green } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: green[700],
            dark: green[800],
            light: green[500],
            contrastText: '#ffffff',
        },
        secondary: {
            main: cyan[400],
            dark: cyan[500],
            light: cyan[300],
            contrastText: '#ffffff',
        },
        background: {
            default: '#f7f6f3',
            paper: '#ffffff', 
        }
    }
});