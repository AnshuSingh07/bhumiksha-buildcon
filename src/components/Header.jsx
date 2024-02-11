import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import logo from "../assets/images/brand-logo.png";
import MobileDrawer from "./MobileDrawer";

// eslint-disable-next-line react/prop-types
const Header = ({ homeRef, projectRef, contactRef }) => {
  const handleNavigation = (value) => {
    if (value === "home") {
      // eslint-disable-next-line react/prop-types
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (value === "project") {
      // eslint-disable-next-line react/prop-types
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      // eslint-disable-next-line react/prop-types
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <AppBar sx={{ padding: "0 !important", backgroundColor: "#f2f2f3" }}>
        <Box className="custom-container">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "85px",
                  maxWidth: "85px",
                  minWidth: "60px",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
              >
                <img
                  src={logo}
                  alt="nft-logo"
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="caption"
                  sx={{ color: "#d0962c", fontSize: "1.1rem", fontWeight: 600 }}
                >
                  Bhumiksha Buildcon
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.primary",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                  }}
                >
                  Building Trust Since 2017
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "text.primary",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  padding: "6px 10px",
                  "@media (max-width: 1024px)": {
                    padding: "6px 4px",
                  },
                }}
                onClick={() => handleNavigation("home")}
              >
                Home
              </Button>

              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "text.primary",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  padding: "6px 10px",
                  "@media (max-width: 1024px)": {
                    padding: "6px 4px",
                  },
                }}
                onClick={() => handleNavigation("project")}
              >
                Projects
              </Button>

              <Button
                sx={{
                  textTransform: "capitalize",
                  color: "text.primary",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                  padding: "6px 10px",
                  "@media (max-width: 1024px)": {
                    padding: "6px 4px",
                  },
                }}
                onClick={() => handleNavigation("contact")}
              >
                Contact Us
              </Button>
            </Box>
            <Box
              sx={{ display: { xs: "flex", lg: "none" }, alignItems: "center" }}
            >
              <MobileDrawer handleNavigation={handleNavigation} />
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
