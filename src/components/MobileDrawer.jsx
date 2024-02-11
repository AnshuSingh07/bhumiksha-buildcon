import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function MobileDrawer({
  // eslint-disable-next-line react/prop-types
  handleNavigation,
}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, display: { lg: "none" } }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["home", "project", "contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleNavigation(text)}>
              <ListItemText
                primary={
                  text === "home"
                    ? "Home"
                    : text === "project"
                    ? "Projects"
                    : "Contact Us"
                }
                sx={{
                  color: "text.primary",
                  fontWeight: "600 !important",
                  fontSize: "1.2rem !important",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton
          onClick={toggleDrawer("right", true)}
          size="large"
          sx={{ padding: "12px 0px", color: "text.primary" }}
        >
          <MenuRoundedIcon fontSize="inherit" />
        </IconButton>
        <Drawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
