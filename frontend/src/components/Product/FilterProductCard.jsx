import {
  Image,
  Stack,
  Text,
  Rating,
  Card,
  Grid,
  Button,
  createStyles,
  Box,
  CardSection,
  NumberInput,
  ActionIcon,
  Divider,
} from "@mantine/core";
import { IconEye } from "@tabler/icons-react";
import { IconArrowsShuffle2 } from "@tabler/icons-react";
import { IconHeart } from "@tabler/icons-react";

const useStyle = createStyles(() => ({
  card: {
    "&:hover": {
      opacity: 1,
      borderBottom: "hidden",
    },
  },
  cardOne: {
    "&:hover": {
      borderBottomStyle: "hidden",
    },
  },
  btn: {
    fontFamily: "Lato, sans-serif",
    "&:hover": {
      backgroundColor: "#fcb900",
    },
  },
  txt: {
    fontFamily: "Lato, sans-serif",
  },
}));

const Img = import.meta.env.VITE_REACT_PRODUCT_IMAGE_URL;

function FilterProductCard({ Items }) {
  const { classes } = useStyle();

  return (
    <>
      <Grid p="lg">
        {Items &&
          Items?.map((item) => (
            <Grid.Col lg={3} md={6} sm={6} key={item.id}>
              <Card
                padding="md"
                radius="lg"
                sx={{
                  background: "transparent",
                  maxWidth: "240px",
                  height: "100%",
                  position: "relative",
                  zIndex: -1,
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0px;",
                }}
                className={classes.cardOne}
              >
                <Stack align="center">
                  <Box w={150} margin="auto">
                    <Image width="100%" src={Img + item.thumbnail} />
                  </Box>
                </Stack>
                <Stack>
                  <Rating defaultValue={1.5} mt={30} />

                  <Text fw={500} color="green" className={classes.txt}>
                    {item.name}
                  </Text>
                  {/* <Text fw={500} sx={{ fontFamily: "Lato, sans-serif",color:"#1F6E8C"}} className={classes.txt}>
                    Stock : {item.stock}
                  </Text> */}

                </Stack>

                <Stack
                  p="md"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                     justifyContent:"space-around",
                    alignItems: "center",
                  }}
                  className={classes.txt}
                >
                  <Text c="teal.5" td="underline" fw={700}>
                  ₹{item.discount_price}
                  </Text>
                  <Text c="dimmed" td="line-through" fw={700}>
                  ₹{item.price}
                  </Text>
                </Stack>
                <Stack align="center">
                   
                   <Button
                     sx={{
                       width: "140px",
                       height: "48px",
                       backgroundColor: "#20c997",
                       padding: "10px",
                     }}
                     className={classes.btn}
                   >
                     Add to Cart
                   </Button>
                 </Stack>
              </Card>
           
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
}

export default FilterProductCard;
