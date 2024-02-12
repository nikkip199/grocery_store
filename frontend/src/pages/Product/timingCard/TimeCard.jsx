import {
  Grid,
  Card,
  Image,
  Text,
  Rating,
  Group,
  Stack,
  Button,
  createStyles,
  SimpleGrid,
} from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { banner6 } from "../../../assets/imgImport";
import { banner5 } from "../../../assets/imgImport";
import { banner7 } from "../../../assets/imgImport";
import { banner8 } from "../../../assets/imgImport";
import { CountDown } from "./CountDown";

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 250ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "translateY(-10px)",
      boxShadow: theme.shadows.md,
    },
  },
}));

const data = [
  {
    id: 1,
    image: banner5,
    title: "Organic Cage Grade A Large Eggs",
    by: "Hambger Hel",
    priceOne: "21.00",
    priceTwo: "21.00",
  },
  {
    id: 2,
    image: banner6,
    title: "Naturally Flavored Cinnamon Vanilla",
    by: "Hambger Hel",
    priceOne: "21.00",
    priceTwo: "21.00",
  },
  {
    id: 3,
    image: banner7,
    title: "Seeds of Change Organic Watermelon",
    by: "Hambger Hel",
    priceOne: "21.00",
    priceTwo: "21.00",
  },
  {
    id: 4,
    image: banner8,
    title: "Dried fruit of: apricots, figs, prunes",
    by: "Hambger Hel",
    priceOne: "21.00",
    priceTwo: "21.00",
  },
];
export const TimeCard = () => {
  const { classes } = useStyles();
  return (
    // <div
    //   style={{
    //     padding: "2",
    //     // position: "relative",
    //     // width: "327px",
    //     // height: "476px",
    //     borderRadius: "15px",
    //     margin: "20px",
    //     // direction: "row",
    //   }}
    // >
    <SimpleGrid
      cols={4}
      // VerticalSpacing='lg'
      // spacing='lg'
      justify='space-around'
      // breakpoints={[
      //   { maxWidth: "62rem", cols: 2, spacing: "md" },
      //   { maxWidth: "48rem", cols: 2, spacing: "sm" },
      //   { maxWidth: "36rem", cols: 1, spacing: "sm" },
      // ]}
      breakpoints={[
        { maxWidth: "md", cols: 3, spacing: "md" },
        { maxWidth: "sm", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {/* <Grid>
          <Grid.Col style={{ maxWidth: 350 }} sm={12} xs={12} lg={3} md={6}> */}
      {data.map((item) => (
        <Grid key={item.id}>
          <Grid.Col style={{ flexDirection: "row" }}>
            <Card
              padding='5px'
              style={{
                width: "327px",
                height: "476px",
                borderRadius: "25px",
                // position: "absolute",
                left: "0%",
                right: "0%",
                top: "0px",
              }}
            >
              <Image
                src={item.image}
                width={"100%"}
                style={{
                  width: "327px",
                  height: "335px",
                  borderRadius: "25px",
                  position: "absolute",
                  left: "0%",
                  right: "0%",
                  top: "0px",
                }}
              />
              {/* Timing counter */}
              <div className={classes.card}>
                <div style={{ margin: "20px" }}>
                  <CountDown />
                </div>

                <Card
                  shadow='sm'
                  padding='25px 30px'
                  radius='md'
                  style={{
                    width: "307px",
                    height: "206px",
                    borderRadius: "10px",
                    position: "absolute",
                    top: "210px",
                  }}
                >
                  <Group noWrap spacing={0}>
                    <Stack justify='space-around'>
                      <Text
                        style={{
                          fontFamily: "QuickSand, sans-serif",
                          fontSize: "15px",
                          fontWeight: "12px",
                          lineHeight: "19.2px",
                          color: "#253D4E",
                          marginTop: "xs",
                        }}
                      >
                        {item.title}
                      </Text>
                      <Rating
                        defaultValue={2}
                        color='#ADADAD'
                        size='xs'
                        count={6}
                      />
                      <Text
                        style={{
                          fontFamily: "Quicksand, sans-serif",
                          fontSize: "15px",
                          fontWeight: "12px",
                          lineHeight: "19.2px",
                          color: "#253D4E",
                          marginTop: "xs",
                        }}
                      >
                        By {item.by}
                      </Text>
                      <Group noWrap spacing='xs'>
                        <Text
                          style={{
                            fontFamily: "Quicksand,sans-serif",
                            fontWeight: "600",
                            fontSize: "18px",
                            lineHeight: "19.2px",
                            color: "#253D4E",
                          }}
                        >
                          $ {item.priceOne}
                        </Text>
                        <Text
                          td='line-through'
                          style={{
                            fontFamily: "Quicksand,sans-serif",
                            fontWeight: "600",
                            fontSize: "14px",
                            lineHeight: "18px",
                            color: "#C1C1C1",
                          }}
                        >
                          {" "}
                          $ {item.priceTwo}
                        </Text>
                        <Button
                          style={{
                            fontFamily: "Quicksand,sans-serif",
                            width: "70px",
                            height: "35px",
                            borderRadius: "2px",
                            color: "#80B82D",
                            backgroundColor: "#E6F1D5",
                            left: "60px",
                          }}
                          size='14px'
                          leftIcon={<IconShoppingCartPlus size={"14px"} />}
                        >
                          Add
                        </Button>
                      </Group>
                    </Stack>
                  </Group>
                </Card>
              </div>
            </Card>
          </Grid.Col>
        </Grid>
      ))}
      {/* </Grid.Col>
        </Grid> */}
    </SimpleGrid>
  );
};
