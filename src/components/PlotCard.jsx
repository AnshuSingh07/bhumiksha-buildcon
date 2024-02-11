import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
const PlotCard = ({ project: { projectName, imgUrl } }) => {
  return (
    <>
      <Card
        elevation={10}
        sx={{
          borderRadius: "0.7rem",
          width: "100%",
        }}
      >
        <Box
          sx={{
            height: { xs: "270px", sm: "263px" },
            position: "relative",
            zIndex: 0,
            overflow: "hidden",
            cursor: "pointer",
            "&:hover .MuiCardMedia-root": {
              transform: "scale(1.1)",
            },
          }}
        >
          <CardMedia
            component="img"
            width="100%"
            height="100%"
            image={imgUrl}
            alt="bhumiksha-buildcon-project"
            sx={{ transform: "scale(1)", transition: "all .4s ease-in-out 0s" }}
          />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {projectName}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default PlotCard;
