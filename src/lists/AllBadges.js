import { Badge } from "@mui/material";
import React from "react";

const AllBadges = ({ Icon, value, color }) => {
  return (
    <Badge badgeContent={value} color={color}>
      <Icon color={"primary"} />
    </Badge>
  );
};

export default AllBadges;
