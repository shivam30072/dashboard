import Avatars from "@/lists/Avatars";
import ButtonGroups from "@/lists/ButtonGroups";
import { ArrowBack } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MessageIcon from "@mui/icons-material/Message";
import React from "react";

const HeroSection = () => {
  return (
    <Box
      bgcolor={"#15132b"}
      minHeight={{ xs: "10vh", md: "20vh", xl: "10vh" }}
      p={2}
      borderRadius={2}
    >
      <Box display={"flex"} gap={2}>
        <Avatar sx={{ width: 28, height: 28, marginTop: 0.5 }}>
          <ArrowBack />
        </Avatar>
        <Typography color={"white"} fontSize={20} fontWeight={900}>
          {"School November Tasks"}
        </Typography>
      </Box>
      <Box ml={6} mt={1.4}>
        <Typography color={"#4b4a58"} fontSize={13}>
          Created by Instructor Day on September 17, 2023
        </Typography>
      </Box>
      <Box display={"flex"} mt={2} ml={6}>
        <Avatars />
        <Box
          display={{ xs: "none", sm: "flex" }}
          gap={2}
          ml={2}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ButtonGroups
            text={"Invite People"}
            Icon={PersonAddIcon}
            bgcolor={"#6418c3"}
          />

          <ButtonGroups text={"Private"} />
          <ButtonGroups text={"Edit"} bgcolor={"#7879f1"} />
          <ButtonGroups text={"45 comments"} Icon={MessageIcon} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
