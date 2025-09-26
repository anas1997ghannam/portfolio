"use client";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { useTranslations } from "next-intl";
import { useLang } from "../contexts/LanguageContext";

export default function Navbar() {
  const t = useTranslations("navbar");
  const { switchLang } = useLang();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="primary">
          Portfolio
        </Typography>
        <Box>
          <Button color="inherit">{t("projects")}</Button>
          <Button color="inherit">{t("contact")}</Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={switchLang}
            sx={{ ml: 2 }}
          >
            {t("switchLang")}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
