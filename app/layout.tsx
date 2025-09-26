"use client";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: { default: "#2c2c2c" },
    primary: { main: "#A259FF" },
    secondary: { main: "#CFFFE5" },
    text: { primary: "#FFFFFF", secondary: "#CFFFE5" },
  },
  typography: { fontFamily: "Inter, sans-serif" },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Anas Ghannam | Frontend Developer</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
