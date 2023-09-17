import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const NavItems = ({ header, Icon, handleSelect }) => {
  const handleClick = (selectedItem) => {
    handleSelect(selectedItem);
  };
  return (
    <Box
      display={"flex"}
      mb={3}
      gap={2}
      sx={{
        cursor: "pointer",
      }}
      onClick={() => {
        handleClick(header);
      }}
    >
      <Icon color="primary" />
      <Typography
        sx={{
          "&:hover": {
            color: "#6418c3",
          },
        }}
        color={"#5959b3"}
        ml={1}
        mt={0.5}
        fontFamily={"poppins"}
      >
        {header}
      </Typography>
    </Box>
  );
};

export default NavItems;
