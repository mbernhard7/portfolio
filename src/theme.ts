import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark"
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#121212B0"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: "#121212B0"
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: "#121212E6"
                }
            }
        }
    }
});

export default theme;
