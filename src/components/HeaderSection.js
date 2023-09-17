import {
  Avatar,
  Badge,
  Box,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import FolderIcon from "@mui/icons-material/Folder";
import LockIcon from "@mui/icons-material/Lock";
import React, { useState } from "react";
import { ArrowDownward, KeyboardArrowDown } from "@mui/icons-material";
import Person2Icon from "@mui/icons-material/Person2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";

import AllBadges from "@/lists/AllBadges";

const HeaderSection = ({ open, setOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchor = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickBurger = () => {
    setOpen(!open);
  };

  return (
    <Box
      display={"flex"}
      bgcolor={"#15132b"}
      justifyContent={"space-between"}
      minHeight={{ xs: "10vh", sm: "11.5vh" }}
      alignItems={"center"}
      px={2}
    >
      <Box py={{ xs: 1, sm: 1 }} display={"flex"} gap={4}>
        <Typography
          sx={{
            fontSize: "23px",
            marginLeft: "8px",
            color: "white",
            display: { xs: "none", md: "flex" },
            //   fontFamily: "poppins",
          }}
        >
          WEFRAME
        </Typography>
        <MenuIcon
          sx={{ marginTop: 0.5, cursor: "pointer" }}
          fontSize="medium"
          color="primary"
          onClick={handleClickBurger}
        />
      </Box>
      <Box display={"flex"} ml={{ xs: 2, sm: 2 }}>
        <input
          type="text"
          style={{
            width: "200px",
            padding: "10px",
            borderRadius: "20px",
            backgroundColor: "#211a75",
            color: "white",
            borderWidth: "0px",
          }}
          placeholder="Search Here"
        />
      </Box>

      <Typography
        fontSize={"10px"}
        color={"#5959b3"}
        display={{ xs: "none", sm: "flex" }}
        style={{ textDecoration: "underline" }}
      >
        OTHER MENUS
      </Typography>
      <Box display={{ xs: "none", sm: "flex" }} gap={2}>
        <AllBadges Icon={NotificationsIcon} value={2} color={"secondary"} />
        <AllBadges Icon={EmailIcon} value={3} color={"success"} />
        <AllBadges Icon={FolderIcon} value={5} color={"error"} />
        <AllBadges Icon={LockIcon} value={1} color={"info"} />
      </Box>
      <Box display={{ xs: "none", md: "flex" }}>
        <Button
          sx={{
            bgcolor: "#211a75",
            color: "white",
            borderRadius: 4,
            paddingX: 2,
          }}
          id="basic-button"
          aria-controls={openAnchor ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openAnchor ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          ENGLISH
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openAnchor}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>HINDI</MenuItem>
          <MenuItem onClick={handleClose}>KOREAN</MenuItem>
          <MenuItem onClick={handleClose}>JAPANESE</MenuItem>
        </Menu>
      </Box>
      <Avatar sx={{ display: { xs: "none", md: "flex" } }}>
        <Person2Icon />
      </Avatar>
      <Box display={{ xs: "flex", md: "none" }}>
        <MoreVertIcon color="primary" />
      </Box>
    </Box>
  );
};

export default HeaderSection;
