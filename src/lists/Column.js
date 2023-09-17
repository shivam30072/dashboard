import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import TaskCard from "./TaskCard";

const Column = ({ text, cardContent }) => {
  return (
    <Box>
      <Box
        color={"white"}
        textAlign={"left"}
        display={"flex"}
        gap={9}
        // bgcolor={"red"}
        alignItems={"center"}
        justifyContent={{ xs: "space-between", md: "" }}
        bgcolor={"#0d0b21"}
      >
        <Typography>{text}</Typography>
        <Add
          sx={{
            bgcolor: "#6418c3",
            padding: 0.4,
            borderRadius: 2,
            cursor: "pointer",
          }}
        />
      </Box>
      <Box mt={2}>
        {cardContent?.length > 0 ? (
          cardContent.map((item) => <TaskCard key={item.id} item={item} />)
        ) : (
          <Box bgcolor={"#211a75"} borderRadius={2}>
            <Box p={3}>
              <Typography
                sx={{
                  border: "1px dashed grey",
                  padding: 1,
                  borderRadius: 1,
                  color: "white",
                }}
              >
                Move Card Here
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Column;
