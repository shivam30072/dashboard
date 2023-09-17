import Column from "@/lists/Column";
import { Box } from "@mui/material";
import React from "react";
import { cardContent, cardContent2, cardContent3 } from "../lists/Dummydata";

const CardsSection = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      gap={2}
      mt={2}
      justifyContent={"space-evenly"}
    >
      <Column cardContent={cardContent} text={"TO DO LIST(4)"} />
      <Column cardContent={cardContent2} text={"IN PROGRESS(12)"} />
      <Column cardContent={cardContent3} text={"DONE(4)"} />
      <Column text={"REVISED(2)"} />
    </Box>
  );
};

export default CardsSection;
