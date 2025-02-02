"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidthExpanded = 200;
const drawerWidthCollapsed = 60;

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        sx={{
          width: open ? drawerWidthExpanded : drawerWidthCollapsed,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? drawerWidthExpanded : drawerWidthCollapsed,
            boxSizing: "border-box",
            transition: "width 0.3s ease",
            top: 64, // Adjust based on your navbar height
            height: "calc(100% - 64px)", // Adjust height so it starts below navbar
            overflowX: "hidden",
          },
        }}
      >
        {/* Spacer for Navbar Height */}

        <List>
          {[
            { text: "Dashboard", icon: <DashboardIcon /> },
            { text: "Orders", icon: <ShoppingCartIcon /> },
            { text: "Reports", icon: <BarChartIcon /> },
            { text: "Sales", icon: <DescriptionIcon /> },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {open && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
