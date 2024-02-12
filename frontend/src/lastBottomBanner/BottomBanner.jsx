import {
  createStyles,
  Text,
  Title,
  Button,
  Grid,
  Tooltip,
  TextInput,
  BackgroundImage,
} from "@mantine/core";
import { banner9 } from "../assets/imgImport";

const useStyles = createStyles((theme) => ({
  bgImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  title: {
    color: "#253D4E",
    lineHeight: "60px",
    fontSize: "52px",
    marginTop: theme.spacing.xs,
    // fontSize:"40px",
    fontFamily: "Quicksand, sans-serif",
  },

  category: {
    fontFamily: "Lato, sans-serif",
    color: "#7E7E7E",
    fontWeight: 400,
    lineHeight: "28px",
    fontSize: "18px",
    marginTop: "30px",
  },
  input: {
    position: "absolute",
    minWidth: "450px",
    // maxHeight: "64px",
    fontFamily: "Lato, sans-serif",
    radius: "50px",
    fontSize: "18px",
  },
  button: {
    fontFamily: "Lato, sans-serif",
    backgroundColor: "#80B82D",
    borderRadius: "50px",
    minHeight: "62px",
    minWidth: "132px",
    left: "345px",
    top: "0%",
    color: "white",
  },
}));

function BottomBanner() {
  const { classes } = useStyles();
  return (
    <>
      <BackgroundImage
        className={classes.bgImage}
        sx={{ width: "100%" }}
        p='md'
        radius='md'
        src='https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/banner-10-min.png'
      >
        <Grid gutter={20} p='lg'>
          <Grid.Col span={6} p='md'>
            <Title component='h6' className={classes.title}>
              Stay home & get your daily needs from our shop
            </Title>
            <Text className={classes.category} size='xs'>
              Start Your Daily Shopping with Company Name
            </Text>
            <div style={{ position: "relative", marginTop: "20px" }}>
              <Tooltip label='please fill out this field'>
                <TextInput
                  radius='xl'
                  size='xl'
                  placeholder='your email address here'
                  className={classes.input}
                />
              </Tooltip>
              <Button className={classes.button} variant='#80B82D'>
                Subscribe
              </Button>
            </div>
          </Grid.Col>
          <Grid.Col span={6} p='md'>
            <div>
              <img
                srcSet={banner9}
                width={"552px"}
                height={"301px"}
                style={{ top: "121px", left: "10px" }}
              />
            </div>
          </Grid.Col>
        </Grid>
      </BackgroundImage>
    </>
  );
}

export default BottomBanner;
