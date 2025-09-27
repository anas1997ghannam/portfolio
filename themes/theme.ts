import {createTheme} from "@mui/material/styles";
import { darkThemeColors } from "./colors";
import { lightThemeColors } from "./colors";

export const darkTheme = createTheme({
    palette: {
        background: { default: darkThemeColors.background },
        primary: { main: darkThemeColors.primary },
        secondary: { main: darkThemeColors.secondary },
        text: { primary: darkThemeColors.textPrimary, secondary: darkThemeColors.textSecondary },
        
    },
    typography: { fontFamily: "Inter, sans-serif" },
});

export const lightTheme = createTheme({
    palette: {
        background: { default: lightThemeColors.background },
        primary: { main: lightThemeColors.primary },
        secondary: { main: lightThemeColors.secondary },
        text: { primary: lightThemeColors.textPrimary, secondary: lightThemeColors.textSecondary },
    },
    typography: { fontFamily: "Inter, sans-serif" },
});
