import { ArrowForward } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import DialpadIcon from "@mui/icons-material/Dialpad";
import React from "react";

const FooterCard = () => {
  return (
    <Box bgcolor={"#0977d3"} p={3} borderRadius={4}>
      <DialpadIcon />
      <Typography>Increase Your Work Here</Typography>
      <ArrowForward />
    </Box>
  );
};

export default FooterCard;
