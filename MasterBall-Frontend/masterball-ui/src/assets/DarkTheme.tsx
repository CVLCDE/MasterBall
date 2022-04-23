import { createTheme } from '@mui/material/styles';
import Colors from './Colors';

const DarkTheme = createTheme({
    palette: {
        primary: {
            main: Colors.dark_body_background,
        },
        secondary: {
            main: Colors.purple
        },
        error: {
            main: Colors.red
        },
        warning: {
            main: Colors.orange
        },
        info: {
            main: Colors.blue
        },
        success: {
            main: Colors.green
        }
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                textAlign: 'center',
                backgroundColor: "#383838",
                height: 333,
                lineHeight: '60px',
                }
            }
        }
    }


})

export default DarkTheme;