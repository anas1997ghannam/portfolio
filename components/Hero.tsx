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
import { useTheme } from "@mui/material/styles";

export default function Hero() {
  const t = useTranslations("hero");
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
        paddingTop: "64px",
        background: `
      radial-gradient(at 20% 30%, ${theme.palette.primary.main}22, transparent 40%),
      radial-gradient(at 80% 20%, ${theme.palette.secondary.main}22, transparent 40%),
      radial-gradient(at 50% 80%, ${theme.palette.primary.main}22, transparent 40%),
      ${theme.palette.background.default}
    `,
      }}
    >
      {/* Orbs متحركة */}
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -15, 15, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: theme.palette.primary.main,
          opacity: 0.08,
          filter: "blur(120px)",
          top: "20%",
          left: "10%",
        }}
      />
      <motion.div
        animate={{ x: [0, -25, 25, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: theme.palette.secondary.main,
          opacity: 0.08,
          filter: "blur(100px)",
          bottom: "15%",
          right: "15%",
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* الصورة الدائرية + Glow */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: `0 0 40px ${theme.palette.primary.main}66`,
            }}
            transition={{ type: "spring", stiffness: 200 }}
            style={{
              display: "inline-block",
              borderRadius: "50%",
            }}
          >
            <Avatar
              alt="Anas"
              src="/assets/profile.jpg"
              sx={{
                width: 150,
                height: 150,
                margin: "0 auto",
                mb: 3,
                border: `3px solid ${theme.palette.primary.main}`,
              }}
            />
          </motion.div>

          {/* العنوان + سمايل */}
          <Typography
            variant="h3"
            color="primary"
            gutterBottom
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // صغير = عمودي
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              fontSize: { xs: "2rem", sm: "3rem" }, // تصغير على الموبايل
            }}
          >
            {t("title")}
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -10, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
              style={{ display: "inline-block", fontSize: "2rem" }}
            >
              👋
            </motion.span>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            color="secondary"
            paragraph
            sx={{ fontSize: { xs: "1.1rem", sm: "1.5rem" } }}
          >
            {t("subtitle")}
          </Typography>
          {/* الأزرار */}
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<MailOutlineIcon />}
                href="#contact"
                fullWidth={true}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: ` 0 0 20px ${theme.palette.primary.main}88`,
                  },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {t("contactBtn")}
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<GitHubIcon />}
                fullWidth={true}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.background.default,
                    boxShadow: `0 0 20px ${theme.palette.secondary.main}88`,
                  },
                  width: { xs: "100%", sm: "auto" },
                }}
              >
                {t("projectsBtn")}
              </Button>
            </motion.div>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
