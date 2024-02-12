import { Carousel } from "@mantine/carousel";
// import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";

import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  // useMantineTheme,
  Grid,
  rem,
  Tooltip,
  TextInput,
  getStylesRef,
  Container,
} from "@mantine/core";

import { sliderOne } from "../../assets/imgImport";
import { sliderTwo } from "../../assets/imgImport";
import { useRef } from "react";

const data = [
  {
    image: sliderTwo,
    // title1: "Fresh Vegetables",
    // title2: "Big Discount",
    title: "Fresh Vegetables Big Discount",
    category: "Save up to 50% off on your first order",
  },
  {
    image: sliderOne,
    title1: "Dont't miss amazing",
    title2: "grocery deals",
    category: "Sign up for the daily newsletter",
  },
];

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
  },
  card: {
    display: "flex",
    borderRadius: "30px",
    minWidth: "1380px",
    // maxHeight:'467px',
    marginTop: "45px", // change
    // padding: "10px",
  },

  title: {
    fontFamily: " Quicksand , sans-serif",
    color: "#253D4E",
    lineHeight: "72px",
    fontSize: "72px",
    marginTop: theme.spacing.xs,
  },

  category: {
    fontFamily: "Lato , sans-serif",
    color: "#7E7E7E",
    fontWeight: 500,
    fontSize: "30px",
    marginTop: "79px",
    lineHeight: "28px",
  },
  input: {
    position: "absolute",
    minWidth: "450px",
    // maxHeight: "64px",

    radius: "50px",
    fontFamily: "Lato , sans-serif",
  },
  button: {
    backgroundColor: "#80B82D",
    borderRadius: "50px",
    minHeight: "62px",
    minWidth: "132px",
    left: "345px",
    top: "0%",
    fontFamily: "Lato , sans-serif",
    color: "#fff",
  },
  carousel: {
    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: "width 250ms ease",

    "&[data-active]": {
      width: rem(16),
    },
  },
  inputField: {
    position: "absolute",
    float: "left",
    top: "480px",
    left: "230px",
    // zIndex: 3,
  },
}));

export function CarouselOne() {
  // const theme = useMantineTheme();
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  const slides = data.map((item, index) => (
    <Carousel.Slide key={index}>
      <Paper
        shadow='md'
        p='xl'
        radius='md'
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <Grid justify='center' gutter='lg'>
          <Grid.Col span={12}>
            <div
              style={{
                textAlign: "left",
                marginLeft: "150px",
                padding: "40px",
              }}
            >
              <Title className={classes.title}>
                Fresh Vegetables <br />
                Big Discount
              </Title>
              <Text
                className={classes.category}
                size='xs'
                // style={{ lineHeight: "28px" }}
              >
                {item.category}
              </Text>
              <div>
                <Tooltip label='please fill out this field'>
                  <TextInput
                    radius='xl'
                    size='xl'
                    placeholder='your email address here'
                    className={classes.input}
                  />
                </Tooltip>
                <Button className={classes.button} variant='#80B82D'>
                  subscribe
                </Button>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </Paper>
    </Carousel.Slide>
  ));

  return (
    <>

    <Grid.Col lg={12} sm={12} md={12}>
      <Carousel
        className={classes.main}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        // className={classes.card}
        radius='50px'
        // slideSize='100%'
        // slideGap='xl'
        align='start'
        // controlsOffset='40px'
        controlSize={40}
        loop
      
        withIndicators
      >
        {slides}
      </Carousel>
    </Grid.Col>
    </>
  );
}
