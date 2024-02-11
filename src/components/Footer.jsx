import { Box, Container, Divider, Typography } from "@mui/material";
import logo from "../assets/images/brand-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container className="custom-container">
          <Box
            sx={{
              padding: { xs: "0rem 1rem", sm: "0rem 2rem", md: "0rem 3rem" },
            }}
          >
            <Divider />
          </Box>
          <Box
            sx={{
              padding: {
                xs: "0.5rem 1rem",
                sm: "0.5rem 2rem",
                md: "0.5rem 3rem",
              },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", sm: "flex-start" },
              }}
            >
              <Box
                sx={{
                  width: "105px",
                  maxWidth: "105px",
                  minWidth: "60px",
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
                  sx={{
                    color: "#d0962c",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Bhumiksha Buildcon
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "text.primary",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Building Trust Since 2017
                </Typography>
              </Box>
            </Box>

            <Typography variant="subtitle1" color="text.primary">
              Copyright ©{currentYear} All rights reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
