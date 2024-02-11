import { Box, CardMedia, Typography } from "@mui/material";
import heroBannerImg from "../assets/images/hero-building-image.png";

const Banner = () => {
  return (
    <>
      <Box
        id="scroll-container"
        sx={{
          width: "100%",
          height: { xs: "100%", md: "500px" },
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          padding: "2rem 2rem 2rem 2rem",
          background:
            "linear-gradient(90deg, rgba(194,223,232,1) 0%, rgba(251,217,185,1) 100%)",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "50%", lg: "45%" },
            margin: { xs: "1rem 0rem", md: "0rem 0rem" },
          }}
        >
          <Typography
            variant="caption"
            color="text.primary"
            sx={{ fontSize: "1.1rem", marginLeft: "0.1rem" }}
          >
            Discover Your Dream Home with Bhumiksha Buildcon !
          </Typography>
          <Typography
            variant="h4"
            color="text.primary"
            sx={{
              fontWeight: 600,
              fontSize: { xs: "1.8rem", md: "2.125rem" },
            }}
          >
            Elevating Dreams, Redefining Homes.
          </Typography>
          <Typography variant="body2" sx={{ marginTop: "0.5rem" }}>
            Experience ultimate convenience at Bhumiksha Buildcon, where
            supermarkets, buses, stations, cinemas, hospitals, and schools are
            within reach.
          </Typography>
        </Box>

        <CardMedia
          component="img"
          image={heroBannerImg}
          alt="hero-banner-image"
          sx={{
            width: { xs: "100%", sm: "400px" },
            height: "auto",
            objectFit: "cover",
            position: { xs: "unset", md: "absolute" },
            left: "2rem",
            top: "2rem",
            zIndex: "4",
          }}
        />
      </Box>
    </>
  );
};

export default Banner;
