/* eslint-disable react/display-name */
import { Box, Container, Grid, Typography } from "@mui/material";
import PlotCard from "./PlotCard";
import { projects } from "../data/projects";
import { forwardRef } from "react";

const ProjectSection = forwardRef((props, ref) => {
  return (
    <>
      <Container>
        <Box ref={ref} sx={{ margin: "5rem 0rem" }}>
          <Typography
            variant="h4"
            color="text.primary"
            textAlign="center"
            marginBottom={1}
          >
            Our Projects
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            textAlign="center"
            marginBottom={10}
          >
            Choose from our multiple projects in Nawadih starting from
            <span style={{ fontWeight: 600 }}> 2300/Sq. Ft.</span> onwards
          </Typography>
          <Grid
            container
            sx={{ flexWrap: { xs: "wrap", md: "nowrap" }, gap: "30px" }}
          >
            {projects.map((project) => {
              return (
                <Grid item xs={12} md={4} key={project.id}>
                  <PlotCard project={project} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </>
  );
});

export default ProjectSection;
