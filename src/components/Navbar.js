import { Avatar, Box, Typography } from "@mui/material";
import React, { forwardRef, useState } from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import MessageIcon from "@mui/icons-material/Message";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GridViewIcon from "@mui/icons-material/GridView";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import NavItems from "../lists/NavItems";
import FooterCard from "./FooterCard";

const navItems = [
  {
    id: 0,
    header: "Dashboard",
    icon: DashboardIcon,
  },
  {
    id: 1,
    header: "Email",
    icon: LocalPostOfficeIcon,
  },
  {
    id: 2,
    header: "Chat",
    icon: MessageIcon,
  },
  {
    id: 3,
    header: "Kanban",
    icon: GridViewIcon,
  },

  {
    id: 4,
    header: "Contact",
    icon: ContactPageIcon,
  },
  {
    id: 5,
    header: "Calendar",
    icon: CalendarMonthIcon,
  },
  {
    id: 6,
    header: "Courses",
    icon: AutoStoriesIcon,
  },
  {
    id: 7,
    header: "Shop",
    icon: AddShoppingCartIcon,
  },
];

const Navbar = ({ open, setOpen }) => {
  const handleClickBurger = () => {
    setOpen(!open);
  };

  const handleSelect = (selectedItem) => {};
  return (
    <>
      {open ? (
        <Box
          color={"white"}
          bgcolor={"#15132b"}
          // display={{ xs: "none", md: "flex" }}
          display={"flex"}
          flexDirection={"column"}
          borderRight={"2px solid #1f1f24"}
          height={"100%"}
          fontFamily={"poppins"}
          px={3}
          minWidth={"15vw"}
        >
          <Box
            pl={1}
            pt={1}
            pb={1}
            borderBottom={"2px solid #1f1f24"}
            display={"flex"}
          >
            <Box py={{ xs: 1, sm: 1 }} display={"flex"} gap={4}>
              <Typography
                sx={{
                  fontSize: "23px",
                  marginLeft: "8px",
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
          </Box>
          <Box mt={2} pl={2}>
            <Typography fontSize={12} letterSpacing={1} mb={2}>
              MAIN MENU
            </Typography>
            {navItems.map((item) => (
              <NavItems
                key={item.id}
                header={item.header}
                Icon={item.icon}
                handleSelect={handleSelect}
              />
            ))}
          </Box>
          <Box mt={30}>
            <FooterCard />
          </Box>
        </Box>
      ) : (
        <Box
          height={{ xs: "10vh", sm: "11.5vh" }}
          bgcolor={"#15132b"}
          display={{ xs: "flex", sm: "flex" }}
        >
          <MenuIcon
            fontSize="medium"
            sx={{
              marginTop: { xs: 3, sm: 3 },
              cursor: "pointer",
              marginLeft: 2,
            }}
            color="primary"
            onClick={handleClickBurger}
          />
        </Box>
      )}
    </>
  );
};

export default Navbar;
