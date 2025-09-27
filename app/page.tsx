//path: app/page.tsx
"use client";
import { Container, Typography, Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  const t = useTranslations("home");

  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
