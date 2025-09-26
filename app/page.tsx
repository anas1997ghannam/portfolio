"use client";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <Navbar />
      <Container maxWidth="md">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="80vh"
          textAlign="center"
        >
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" color="primary" gutterBottom>
              {t("title", { name: "Anas" })}
            </Typography>
            <Typography variant="h5" color="secondary" paragraph>
              {t("subtitle")}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 3 }}
            >
              {t("cta")}
            </Button>
          </motion.div>
        </Box>
      </Container>
    </>
  );
}
