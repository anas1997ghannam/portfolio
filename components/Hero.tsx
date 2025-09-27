//path: components/Hero.tsx
"use client";
import {
  Container,
  Typography,
  Box,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: (theme) => theme.palette.background.default,
        textAlign: "center",
        paddingTop: "64px", // Navbar ثابت
      }}
    >
      <Container maxWidth="sm">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* الصورة الدائرية */}
          <Avatar
            alt="Anas"
            src="/me.jpg" // todo:add your image in public folder
            sx={{
              width: 150,
              height: 150,
              margin: "0 auto",
              mb: 3,
              border: (theme) => `3px solid ${theme.palette.primary.main}`,
            }}
          />

          {/* العنوان مع سمايل متحرك */}
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            {t("title")}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              style={{ display: "inline-block" }}
            >
              👋
            </motion.span>
          </Typography>

          {/* Subtitle */}
          <Typography variant="h5" color="secondary" paragraph>
            {t("subtitle")}
          </Typography>

          {/* الأزرار */}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<MailOutlineIcon />}
              href="#contact"
            >
              {t("contactBtn")}
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<GitHubIcon />}
              href="#projects"
            >
              {t("projectsBtn")}
            </Button>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
