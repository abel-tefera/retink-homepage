import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  Hidden,
  Icon,
  OutlinedInput,
  ThemeProvider,
} from "@mui/material";
import { AppBar } from "@mui/material";
import { theme } from "./theme";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { SvgIcon } from "@mui/material";
import { ReactComponent as RetinkAvatar } from "./assets/retink-avatar.svg";
import { Typography } from "@mui/material";
import { Input } from "@mui/material";
import { ReactComponent as Screenshot } from "./assets/screenshot.svg";
import { BottomNavigation } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import "./App.css";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "center",
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(1),
  marginLeft: theme.spacing(12),
  "@media all": {
    minHeight: 170,
  },
}));

const cardsInfo = [
  {
    title: "MakeAI-assisted Content Choices",
    description:
      "Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.",
    icon: "./assets/icon1.png",
  },
  {
    title: "Upload and Maintain your Brand Identity",
    description:
      "Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!",
    icon: "./assets/icon2.png",
  },
  {
    title: "Be informed as we create",
    description:
      "Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.",
    icon: "./assets/icon3.png",
  },
  {
    title: "Receive and Review",
    description:
      "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    icon: "./assets/icon4.png",
  },
  {
    title: "Publish and Monitor your contents’ progress",
    description:
      "The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.",
    icon: "./assets/icon4.png",
  },
];

const UnderCardInfo = [
  {
    title: "Transform your Creation Process",
    subtitle:
      "With a new approach toordering content, you can now stop juggling multiple documents and meetings and start publishing content faster and on demand",
  },
  {
    title: "Activate your business growth with RetinkContent. ",
    subtitle:
      "Save time and maintain your brand identity within your budget range or sign up for affordable plans and still access multiple content services like:",
  },
];

const bottomCards = [
  {
    title: "Logos",
    description:
      " Have a unique & creative logo designed to express and represent your brand identity.",
    image: "./assets/img1.png",
  },
  {
    title: "Blog Writing",
    description:
      " Write SEO enriched blog posts as long or short articles on any topic of your choice .",
    image: "./assets/img2.png",
  },
  {
    title: "Animated Videos",
    description:
      "Bring animated characters to life to keep your viewers engaged and  entertained.",
    image: "./assets/img3.png",
  },
  {
    title: "Product Demo",
    description:
      "Introduce your product to potential customers in a clear and creative video.",
    image: "./assets/img4.png",
  },
  {
    title: "Copywriting",
    description:
      "Have creative and compelling copies written to boost your product, brand, service or company.",
    image: "./assets/img5.png",
  },
  {
    title: "Social Media Ads",
    description: "Boost sales and awareness with tailor made ads from experts.",
    image: "./assets/img6.png",
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            sx={{ boxShadow: "none" }}
            position="static"
            color="transparent"
          >
            <StyledToolbar>
              <IconButton disableRipple={true} size="large" color="inherit">
                <a href="https://retink.io/" target={"_blank"}>
                  <Logo />
                </a>
              </IconButton>
            </StyledToolbar>
            <Hidden lgDown>
              <RetinkAvatar
                style={{
                  position: "absolute",
                  alignSelf: "self-end",
                  animation: "mover 5s infinite alternate",
                }}
              />
            </Hidden>
          </AppBar>
        </Box>
        <Box sx={{ marginLeft: "7.5rem" }}>
          <Box sx={{ width: "23.5rem", display: "inline-flex" }}>
            <Typography variant={"h4"} style={{ fontWeight: "bold" }}>
              Get Advanced AI
              <br />+ Expert Created
            </Typography>
            <span style={{ alignSelf: "center", marginLeft: "1rem" }}>
              <Typography
                variant={"h4"}
                color={"primary"}
                style={{ fontWeight: "bold" }}
              >
                Logos
              </Typography>
            </span>
          </Box>
          <Typography
            variant={"h5"}
            style={{ marginTop: "0.8rem", marginBottom: "0.8rem" }}
          >
            Boost your sales 10x faster with content customized by our <br />{" "}
            unique partnership of human creativity and AI optimization
          </Typography>
          <Typography
            variant={"h6"}
            color={"primary"}
            style={{ marginTop: "0.2rem", marginBottom: "0.8rem" }}
          >
            Sign Up For The BETA!
          </Typography>
          <Box>
            <Input
              sx={{
                textAlignLast: "center",
                color: "primary.main",
              }}
              color={"primary"}
              placeholder={"Business Name"}
            ></Input>

            <Typography variant={"body"}>
              would like a beta invite sent to
            </Typography>
            <Input
              sx={{
                textAlignLast: "center",
                color: "primary.main",
              }}
              placeholder={"@email address"}
            ></Input>
            <Typography variant={"body"}>when it's ready!</Typography>
          </Box>
          <Box sx={{ marginTop: "2rem" }}>
            <Button
              color={"primary"}
              variant="contained"
              size="large"
              sx={{
                borderRadius: "1.25rem",
                width: "13.938rem",
                textTransform: "none",
              }}
            >
              Notify Me
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{
                borderRadius: "1.25rem",
                marginLeft: "5rem",
                textTransform: "none",
                borderColor: "primary.main",
                textDecorationLine: "underline",
                color: "-webkit-link",
              }}
            >
              Sign Up as a Freelance Partner
            </Button>
          </Box>
        </Box>
        <Box
          sx={{ textAlign: "center", marginTop: "15rem", marginBottom: "3rem" }}
        >
          <iframe
            width="737px"
            height="418px"
            src="https://www.youtube.com/embed/_zgwT65AJys"
            title="Ultimate Funny Dogs Compilation! 🐕 Most Viral DOGS on the internet! 🥰"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Box>
        <Grid sx={{ flexGrow: 1 }} container xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {cardsInfo.map(({ icon, title, description }) => (
              // <Card variant="outlined">{title}</Card>
              <Grid spacing={2}>
                <Card
                  sx={{
                    width: "24.125rem",
                    height: "22.563rem",
                    margin: "1.563rem",
                    borderRadius: "20px",
                    boxShadow: "4px 4px 8px 3px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "-webkit-center",
                      marginTop: "3rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <CardMedia
                      sx={{
                        width: "4.375rem",
                        height: "4.375rem",
                        objectFit: "contain",
                      }}
                      component="img"
                      image={require(`${icon}`)}
                    />
                  </Box>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        textAlign: "-webkit-center",
                        fontWeight: "bold",
                        marginLeft: "2.5rem",
                        marginRight: "2.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{
            textAlign: "-webkit-center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          <Box sx={{ width: "49.688rem", marginBottom: "4rem" }}>
            {UnderCardInfo.map(({ title, subtitle }) => (
              <Box sx={{ padding: "1.25rem", marginBottom: "1rem" }}>
                <Typography
                  variant={"h5"}
                  color={"primary"}
                  sx={{ marginBottom: "0.5rem" }}
                >
                  {title}
                </Typography>
                <Typography variant={"subtitle1"}>{subtitle}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
        <Grid sx={{ flexGrow: 1 }} container xs={12}>
          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ marginLeft: "7.5rem", marginRight: "7.5rem" }}
          >
            {bottomCards.map(({ title, description, image }) => (
              // <Grid spacing={10}>
              <Card
                sx={{
                  width: "15.813rem",
                  margin: "1.563rem",
                  boxShadow: "none",
                }}
              >
                <CardMedia component="img" image={require(`${image}`)} />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      fontWeight: "light",
                      marginBottom: "1rem",
                      textDecorationLine: "underline",
                      textUnderlinePosition: "under",
                      textDecorationColor: "#7E1CFE",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography variant="body1">{description}</Typography>
                </CardContent>
              </Card>
              // </Grid>
            ))}
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            marginLeft: "9rem",
            marginRight: "9rem",
            flexFlow: "column",
            alignItems: "center",
            marginBottom: "5rem",
            marginTop: "1.563rem",
          }}
        >
          <Typography
            variant={"h6"}
            color={"primary"}
            style={{
              marginTop: "0.2rem",
              marginBottom: "0.8rem",
            }}
          >
            Sign Up For The BETA to see more
          </Typography>
          <Box sx={{ padding: "0.625rem" }}>
            <OutlinedInput
              sx={{
                textAlignLast: "center",
                color: "primary.main",
                marginRight: "0.313rem",
              }}
              placeholder={"Business Name"}
            ></OutlinedInput>
            <OutlinedInput
              sx={{
                textAlignLast: "center",
                color: "primary.main",
                marginLeft: "0.313rem",
              }}
              placeholder={"Email"}
            ></OutlinedInput>
          </Box>
          <Button
            color={"primary"}
            variant="contained"
            size="large"
            sx={{
              borderRadius: "1.25rem",
              width: "13.938rem",
              textTransform: "none",
              marginBottom: "1.25rem",
              marginTop: "0.938rem",
            }}
          >
            Notify Me
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "1.25rem",
              textTransform: "none",
              borderColor: "primary.main",
              textDecorationLine: "underline",
              color: "-webkit-link",
              marginBottom: "1.25rem",
            }}
          >
            Sign Up as a Freelance Partner
          </Button>
        </Box>
        <BottomNavigation sx={{ display: "block" }}>
          <Box
            sx={{
              height: "22.25rem",
              backgroundColor: "#D0D0D0",
              color: "#000000",
              width: "-webkit-fill-available",
              marginLeft: "-0.5rem",
              marginRight: "-0.5rem",
              display: "flex",
              paddingLeft: "5rem",
              paddingRight: "5rem",
              placeContent: "space-around",
            }}
          >
            <Box
              sx={{
                height: "11.75rem",
                width: "39.625rem",
                paddingTop: "3.75rem",
                display: "grid",
                alignContent: "space-evenly",
              }}
            >
              <a href="https://retink.io/" target={"_blank"}>
                <Logo style={{ marginBottom: "0.625rem" }} />
              </a>
              <Box
                sx={{ display: "inline-flex", justifyContent: "space-between" }}
              >
                <Typography variant={"h6"}>
                  Product by Retink Media UG
                </Typography>
                <Typography variant={"h6"} sx={{ cursor: "pointer" }}>
                  Get Early Acess
                </Typography>
              </Box>
              <Box
                sx={{ display: "inline-flex", justifyContent: "space-between" }}
              >
                <Typography variant={"h6"}>Bonn, Germany</Typography>
                <Typography variant={"h6"} sx={{ cursor: "pointer" }}>
                  Provide Feedback
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                height: "11.75rem",
                paddingTop: "4.75rem",
                display: "flex",
                alignContent: "space-evenly",
                flexFlow: "column",
              }}
            >
              <Typography variant={"h6"}>Connect with Us</Typography>
              <Box >
                <FacebookIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
                <YouTubeIcon />
                <PinterestIcon />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              height: "7.375rem",
              backgroundColor: "#000000",
              color: "#ffffff",
              width: "-webkit-fill-available",
              marginLeft: "-0.5rem",
              marginRight: "-0.5rem",
              justifyContent: "space-around",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "contents",
                height: "auto",
              }}
            >
              <Typography variant={"body2"}>Copyright © 2021 Retink</Typography>
              <Typography variant={"body2"}>Terms of Service</Typography>
            </Box>
          </Box>
        </BottomNavigation>
      </>
    </ThemeProvider>
  );
}

export default App;
