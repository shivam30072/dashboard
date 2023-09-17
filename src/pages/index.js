import CardsSection from "@/components/CardsSection";
import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { Box } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <Box display={"flex"}>
      <Box bgcolor={"#0d0b21"}>
        <Navbar open={open} setOpen={setOpen} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        // bgcolor={"blue"}
      >
        <HeaderSection open={open} setOpen={setOpen} />
        <Box py={2} px={2} bgcolor={"#0d0b21"} minHeight={"100vh"}>
          <HeroSection />
          <CardsSection />
        </Box>
      </Box>
    </Box>
  );
}
