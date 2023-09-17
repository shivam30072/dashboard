import { Box, LinearProgress, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import Avatars from "./Avatars";

const TaskCard = ({ item }) => {
  return (
    <Box p={2} bgcolor={"#211a75"} mt={1} borderRadius={2}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography color={item.color} fontSize={10}>
          {item.priority}
        </Typography>
        <MoreHorizIcon sx={{ color: "#737093" }} />
      </Box>
      <Typography color={"white"} fontSize={15}>
        {item.text}
      </Typography>
      <Box mt={1.4}>
        {/* <Skeleton variant="text" sx={{ fontSize: "1rem", bgcolor: "red" }} /> */}
        <LinearProgress value={30} color="secondary" />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} mt={2.4}>
        <Box display={"flex"}>
          <Avatars />
        </Box>
        <Box display={"flex"} gap={1}>
          <AccessTimeIcon
            sx={{ width: 12, height: 12, marginTop: 0.4, color: "#737093" }}
          />
          <Typography fontSize={12} color={"#737093"}>
            {item.time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskCard;
