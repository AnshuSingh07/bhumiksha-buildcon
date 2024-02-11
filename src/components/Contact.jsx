import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleLocationMap from "./GoogleLocationMap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <Container>
        <Box sx={{ margin: "5rem 0rem" }}>
          <Typography
            variant="h4"
            color="text.primary"
            textAlign="center"
            marginBottom={10}
          >
            Connect With Us
          </Typography>

          <Grid container sx={{ flexWrap: { xs: "wrap" } }}>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              display="flex"
              justifyContent={{ xs: "left", md: "center" }}
            >
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    id="nested-list-subheader"
                    sx={{
                      color: "#d0962c",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Bhumiksha Buildcon Pvt.Ltd.
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      textAlign="left"
                    >
                      Bhumiksha Buildcon Private Limited, a trustworthy real
                      estate company, has been creating reliable homes since
                      2017. Based in Dhanbad, Jharkhand.
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              display="flex"
              justifyContent={{ xs: "left", md: "center" }}
            >
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    id="nested-list-subheader"
                    sx={{
                      color: "#d0962c",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Contact
                  </ListSubheader>
                }
              >
                <Link to="tel:08789266310" style={{ textDecoration: "none" }}>
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      "& .MuiListItemIcon-root": {
                        color: "text.secondary",
                      },
                      "& .MuiListItemText-root": {
                        color: "text.primary",
                        fontSize: "1.2rem",
                      },

                      "&.MuiListItem-root:hover .MuiListItemIcon-root": {
                        color: "#d0962c",
                      },
                      "&.MuiListItem-root:hover .MuiListItemText-root": {
                        color: "#d0962c",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText>087892 66310</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="https://g.co/kgs/G8L1PtL"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      "& .MuiListItemIcon-root": {
                        color: "text.secondary",
                      },
                      "& .MuiListItemText-root": {
                        color: "text.primary",
                        fontSize: "1.2rem",
                      },

                      "&.MuiListItem-root:hover .MuiListItemIcon-root": {
                        color: "#d0962c",
                      },
                      "&.MuiListItem-root:hover .MuiListItemText-root": {
                        color: "#d0962c",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <GoogleIcon />
                    </ListItemIcon>
                    <ListItemText>Find Us on Google</ListItemText>
                  </ListItem>
                </Link>

                <Link
                  to="https://m.facebook.com/profile.php?id=100054351228227&_rdr"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      "& .MuiListItemIcon-root": {
                        color: "text.secondary",
                      },
                      "& .MuiListItemText-root": {
                        color: "text.primary",
                        fontSize: "1.2rem",
                      },

                      "&.MuiListItem-root:hover .MuiListItemIcon-root": {
                        color: "#d0962c",
                      },
                      "&.MuiListItem-root:hover .MuiListItemText-root": {
                        color: "#d0962c",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <FacebookRoundedIcon />
                    </ListItemIcon>
                    <ListItemText>Connect on Facebook</ListItemText>
                  </ListItem>
                </Link>
                <Link
                  to="https://wa.me/08789266310"
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <ListItem
                    sx={{
                      cursor: "pointer",
                      "& .MuiListItemIcon-root": {
                        color: "text.secondary",
                      },
                      "& .MuiListItemText-root": {
                        color: "text.primary",
                        fontSize: "1.2rem",
                      },

                      "&.MuiListItem-root:hover .MuiListItemIcon-root": {
                        color: "#d0962c",
                      },
                      "&.MuiListItem-root:hover .MuiListItemText-root": {
                        color: "#d0962c",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <WhatsAppIcon />
                    </ListItemIcon>
                    <ListItemText>Connect On WhatsApp</ListItemText>
                  </ListItem>
                </Link>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              display="flex"
              justifyContent={{ xs: "left", md: "center" }}
            >
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    id="nested-list-subheader"
                    sx={{
                      color: "#d0962c",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Address
                  </ListSubheader>
                }
              >
                <ListItem>
                  <ListItemText>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      textAlign="left"
                      //   marginBottom={10}
                    >
                      St.xaviar international school, b.politecnic, Nawadih,
                      Dhanbad, Jharkhand 828130
                    </Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              display="flex"
              justifyContent={{ xs: "left", md: "center" }}
            >
              <List
                sx={{ width: "100%", maxWidth: { xs: "100%", md: 360 } }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    id="nested-list-subheader"
                    sx={{
                      color: "#d0962c",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    Location
                  </ListSubheader>
                }
              >
                <ListItem>
                  <GoogleLocationMap />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Contact;
