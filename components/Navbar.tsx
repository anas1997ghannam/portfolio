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
          backgroundColor: "transparent", // 🔥 شفاف كلياً
          boxShadow: "none",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          {isMobile ? (
            <>
              {/* Mobile Menu */}
              <IconButton
                edge="end"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
                sx={{ ml: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                  sx: {
                    backgroundColor: theme.palette.background.default,
                    color: theme.palette.text.primary,
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
            // Desktop Capsule Navbar with Glassmorphism
            <Box
              sx={{
                backdropFilter: "blur(12px)",
                backgroundColor: "rgba(44,44,44,0.35)", // شفافية
                border: `1px solid ${theme.palette.primary.main}55`,
                borderRadius: "999px",
                px: 4,
                py: 1,
                display: "flex",
                gap: 3,
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                color: theme.palette.text.primary,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "rgba(44,44,44,0.55)", // 🔥 تغمق شوي عند الهوفر
                  border: `1px solid ${theme.palette.primary.main}AA`,
                  transform: "scale(1.02)",
                },
              }}
            >
              {/* اسم الموقع / الاسم */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.primary.main,
                  mr: 2,
                }}
              >
                {t("name")}
              </Typography>

              {/* الروابط */}
              {renderButtons}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
