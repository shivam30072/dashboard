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
import AllBadges from "@/lists/AllBadges";

const HeaderSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <Box display={"flex"} ml={{ xs: 2, sm: 2 }}>
        <input
          type="text"
          style={{
            width: "300px",
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
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          endIcon={<KeyboardArrowDown />}
        >
          ENGLISH
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
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
