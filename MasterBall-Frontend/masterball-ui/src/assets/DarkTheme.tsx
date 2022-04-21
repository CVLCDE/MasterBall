import { createTheme } from '@mui/material/styles';
import Colors from './Colors';

const DarkTheme = createTheme({
    palette: {
        primary: {
            main: Colors.dark_body_background
        },
        secondary: {
            main: "#ab47bc"
        },
        error: {
            main: "#f57c00"
        },
        warning: {
            main: "#f57c00"
        },
        info: {
            main: "#0288d1"
        },
        success: {
            main: "#388e3c"
        }
    }

})

export default DarkTheme;