//path: app/layout.tsx
"use client";
import { LanguageProvider } from "../contexts/LanguageContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme } from "../themes/theme";

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
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
