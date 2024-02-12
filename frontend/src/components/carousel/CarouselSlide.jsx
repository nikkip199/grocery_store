import { Carousel } from "@mantine/carousel";
import { sliderImage1, sliderImage2 } from "../../assets/imgImport";

import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  // rem,
  TextInput,
  Grid,
  // Flex,
} from "@mantine/core";

// import { Grid } from "@mantine/core";

const data = [
  {
    image: sliderImage1,
    title: "Don't miss amazing grocery deals",
    subtitle: "Sign up for daily newsletter",
  },
  {
    image: sliderImage2,
    title: "Fresh Vegetables Big discount",
    subtitle: "Save up to 50% off on your first order",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    //   // height: rem(450),
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "space-between",
    //   alignItems: "flex-start",
    // height: "200",
    // maxWidth: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "30px",
    // margin: "10px",
  },

  title: {
    fontFamily: `Quicksand, ${theme.fontFamily}`,
    fontWeight: 600,
    color: "#253D4E",
    // lineHeight: 5,
    fontSize: "72px",
    // marginTop: theme.spacing.xs,
  },

  subtitle: {
    fontFamily: `Lato, ${theme.fontFamily}`,
    color: "#7E7E7E",
    opacity: 0.7,
    fontWeight: 500,
    textTransform: "uppercase",
    fontSize: "30px",
  },
}));

export const CarouselSlide = () => {
  const { classes } = useStyles();

  const slides = data.map((item,index) => (
    <Carousel.Slide key={index} style={{ position: "relative" }}>
      <Paper
        sx={{ position: "absolute" }}
        maxHeight={600}
        shadow='md'
        p='2rem'
        radius='md'
        className={classes.card}
      >
        <img src={item.image} style={{ width: "100%" }}></img>
        <Title className={classes.title}>{item.title}</Title>

        <Text className={classes.subtitle}>{item.subtitle}</Text>

        <TextInput
          radius='xl'
          size='md'
          rightSection={
            <Button variant='#FFFFFF' style={{ backgroundColor: "green" }}>
              Subscribe
            </Button>
          }
          placeholder='Your email address'
        />
        {/* </Flex> */}
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <Grid gutter={1}>
      <Grid.Col xs={12} md={12} lg={12}>
        <Carousel
          slideSize='100%'
          align='start'
          dragFree
          withIndicators
          styles={{
            control: {
              "&[data-inactive]": {
                opacity: 0,
                cursor: "default",
              },
            },
          }}
        >
          {slides}
        </Carousel>
      </Grid.Col>
    </Grid>
  );
};
