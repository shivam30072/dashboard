import { Button } from "@mui/material";
import React from "react";

const ButtonGroups = ({ text, Icon, bgcolor }) => {
  return (
    <>
      <Button
        startIcon={Icon ? <Icon /> : ""}
        sx={{
          bgcolor: bgcolor ? bgcolor : "black",
          color: "white",
          borderRadius: 2,
          width: { xs: "70px", sm: "100px", md: "140px" },
          height: "30px",
          fontSize: { xs: 8, sm: 10, md: 12 },
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default ButtonGroups;
