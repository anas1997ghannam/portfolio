//path: components/Navbar.tsx
"use client";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLang } from "../contexts/LanguageContext";

export default function Navbar() {
  const t = useTranslations("navbar");
  const { switchLang } = useLang();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // screens < 960px

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: t("home"), href: "#home" },
    { label: t("about"), href: "#about" },
    { label: t("projects"), href: "#projects" },
    { label: t("contact"), href: "#contact" },
  ];

  const renderButtons = (
    <>
      {navLinks.map((link, index) => (
        <Button
          key={index}
          color="inherit"
          sx={{
            mx: 1,
            transition: "all 0.3s ease",
            "&:hover": {
              color: theme.palette.primary.main,
              transform: "translateY(-2px)",
            },
          }}
          href={link.href}
        >
          {link.label}
        </Button>
      ))}
      <Button
        color="secondary"
        variant="outlined"
        onClick={switchLang}
        sx={{
          ml: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.background.default,
          },
        }}
      >
        {t("switchLang")}
      </Button>
    </>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" color="primary">
            {t("name")}
          </Typography>

          {/* Links / Menu */}
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: theme.palette.background.default, // Use theme background color
                    color: theme.palette.text.primary, // Use theme text color
                  },
                }}
              >
                <Box sx={{ width: 250, p: 2 }}>
                  <List>
                    {navLinks.map((link, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton
                          component="a"
                          href={link.href}
                          onClick={() => setDrawerOpen(false)}
                          sx={{
                            "&:hover": {
                              backgroundColor: theme.palette.primary.main,
                              color: theme.palette.background.default,
                            },
                          }}
                        >
                          <ListItemText primary={link.label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          switchLang();
                          setDrawerOpen(false);
                        }}
                        sx={{
                          "&:hover": {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.background.default,
                          },
                        }}
                      >
                        <ListItemText primary={t("switchLang")} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box>{renderButtons}</Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
