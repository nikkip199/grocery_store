import {
  Grid,
  Card,
  Image,
  Text,
  Rating,
  Group,
  Stack,
  Divider,
  createStyles,
} from "@mantine/core";
import {
  product01_1,
  product02_1,
  product03_1,
  product04_1,
  product10_1,
  product09_1,
} from "../../../assets/imgImport";

const TopSelling = [
  {
    image: product01_1,
    title: "Seeds of Change Organic Red Rice",
    price: "$28.85",
    priceTag: "$32.80",
  },
  {
    image: product03_1,
    title: "Angie’s Sweet & Salty Kettle Corn",
    price: "$28.85",
    priceTag: "$32.80",
  },
  {
    image: product02_1,
    title: "All Natural Style Chicken Meatballs",
    price: "$28.85",
    priceTag: "$32.80",
  },
];
const TrendingPro = [
  {
    image: product04_1,
    title: "Foster Farms Takeout Crispy Classic",
    price: "$28.85",
    priceTag: "$32.80",
  },
  {
    image: product10_1,
    title: "Haagen Caramel Cone Ice Cream Boxed",
    price: "$28.85",
    priceTag: "$32.80",
  },

  {
    image: product09_1,
    title: "Haagen Caramel Cone Ice Cream Boxed",
    price: "$28.85",
    priceTag: "$32.80",
  },
];

const data = [
  {
    image: product04_1,
    title: "Foster Farms Takeout Crispy Classic",
    price: "$28.85",
    priceTag: "$32.80",
  },
  {
    image: product10_1,
    title: "Haagen Caramel Cone Ice Cream Boxed",
    price: "$28.85",
    priceTag: "$32.80",
  },

  {
    image: product09_1,
    title: "Haagen Caramel Cone Ice Cream Boxed",
    price: "$28.85",
    priceTag: "$32.80",
  },
];
const TopRated = [
  {
    image: product01_1,
    title: "Seeds of Change Organic Red Rice",
    price: "$28.85",
    priceTag: "$32.80",
  },
  {
    image: product02_1,
    title: "All Natural Style Chicken Meatballs",
    price: "$28.85",
    priceTag: "$32.80",
  },
  {
    image: product03_1,
    title: "Angie’s Sweet & Salty Kettle Corn",
    price: "$28.85",
    priceTag: "$32.80",
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));
export const TopSellingProduct = () => {
  const { classes } = useStyles();
  return (
    <Grid>
      <Grid.Col xs={12} md={3}>
        <h1
          style={{
            fontFamily: "Quicksand , sans-serif",
            fontSize: "24px",
            fontWeight: "600",
            color: "#253D4E",
            lineHeight: "2",
            marginLeft: "5px",
          }}
        >
          Top Selling
        </h1>
        <Divider
          style={{
            color: "#F2F3F4",
            height: "2px",
            // maxWidth: "330px",
          }}
        />
        <Grid>
          {TopSelling.map((product,index) => (
            <Grid.Col key={index}>
              <Card padding='5px' radius='md' className={classes.card}>
                <Group noWrap>
                  <Image src={product.image} height='95px' width='95px' />
                  <Stack justify='space-around'>
                    <Text
                      style={{
                        fontFamily: "Quicksand , sans-serif",

                        fontSize: "16px",
                        lineHeight: "19.2px",
                        marginTop: "xs",

                        color: "#253D4E",
                        "&:hover": {
                          transform: "scale(1.05)",
                          textDecoration: "none",
                          color: "#80B82D",
                        },
                      }}
                    >
                      {product.title}
                    </Text>
                    <Rating
                      defaultValue={2}
                      color='#ADADAD'
                      size='xs'
                      count={6}
                    />
                    <Group noWrap spacing='xs'>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",

                          fontSize: "18px",
                          lineHeight: "19.2px",
                          color: "#253D4E",
                        }}
                      >
                        {product.price}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",

                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#C1C1C1",
                        }}
                      >
                        {product.priceTag}
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Grid.Col>

      {/* Trending Product */}
      <Grid.Col xs={12} md={3}>
        <h1
          style={{
            fontFamily: "Quicksand , sans-serif",
            fontSize: "24px",

            lineHeight: "2",
            marginLeft: "5px",
            color: "#253D4E",
          }}
        >
          Trending Product
        </h1>
        <Divider
          style={{
            color: "#F2F3F4",
            height: "2px",
            // maxWidth: "330px",
          }}
        />
        {TrendingPro.map((product,index) => (
          <Grid key={index}>
            <Grid.Col>
              <Card padding='5px' radius='md' className={classes.card}>
                <Group noWrap>
                  <Image src={product.image} height='95px' width='95px' />
                  <Stack justify='space-around'>
                    <Text
                      style={{
                        fontFamily: "Quicksand , sans-serif",

                        fontSize: "16px",
                        lineHeight: "19.2px",
                        color: "#253D4E",
                        marginTop: "xs",
                      }}
                    >
                      {product.title}
                    </Text>
                    <Rating
                      defaultValue={2}
                      color='#ADADAD'
                      size='xs'
                      count={6}
                    />
                    <Group noWrap spacing='xs'>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",

                          fontSize: "18px",
                          lineHeight: "19.2px",
                          color: "#253D4E",
                        }}
                      >
                        {product.price}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",

                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#C1C1C1",
                        }}
                      >
                        {product.priceTag}
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </Card>
            </Grid.Col>
          </Grid>
        ))}
      </Grid.Col>

      {/* Recently added */}
      <Grid.Col xs={12} md={3}>
        <h1
          style={{
            fontFamily: "Quicksand , sans-serif",
            fontSize: "24px",
            lineHeight: "2",
            marginLeft: "5px",
            color: "#253D4E",
          }}
        >
          Recently Added
        </h1>
        <Divider
          style={{
            color: "#F2F3F4",
            height: "2px",

            // maxWidth: "330px",
          }}
        />
        {data.map((product,index) => (
          <Grid key={index}>
            <Grid.Col>
              <Card padding='5px' radius='md' className={classes.card}>
                <Group noWrap>
                  <Image src={product.image} height='95px' width='95px' />
                  <Stack justify='space-around'>
                    <Text
                      style={{
                        fontFamily: "Quicksand , sans-serif",

                        fontSize: "16px",
                        lineHeight: "19.2px",
                        color: "#253D4E",
                        marginTop: "xs",
                      }}
                    >
                      {product.title}
                    </Text>
                    <Rating
                      defaultValue={2}
                      color='#ADADAD'
                      size='xs'
                      count={6}
                    />
                    <Group noWrap spacing='xs'>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",

                          fontSize: "18px",
                          lineHeight: "19.2px",
                          color: "#253D4E",
                        }}
                      >
                        {product.price}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",
                          fontWeight: "600",
                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#C1C1C1",
                        }}
                      >
                        {product.priceTag}
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </Card>
            </Grid.Col>
          </Grid>
        ))}
      </Grid.Col>

      {/* Top Rated */}
      <Grid.Col xs={12} md={3}>
        <h1
          style={{
            fontFamily: "Quicksand , sans-serif",
            fontSize: "24px",

            lineHeight: "2",
            marginLeft: "5px",
            color: "#253D4E",
          }}
        >
          Top Rated
        </h1>
        <Divider
          style={{
            color: "#F2F3F4",
            height: "2px",

            // maxWidth: "330px",
          }}
        />
        {TopRated.map((product,index) => (
          <Grid key={index}>
            <Grid.Col>
              <Card padding='5px' radius='md' className={classes.card}>
                <Group noWrap>
                  <Image src={product.image} height='95px' width='95px' />
                  <Stack justify='space-around'>
                    <Text
                      style={{
                        fontFamily: "Quicksand , sans-serif",

                        fontSize: "16px",
                        lineHeight: "19.2px",
                        color: "#253D4E",
                        marginTop: "xs",
                      }}
                    >
                      {product.title}
                    </Text>
                    <Rating
                      defaultValue={2}
                      color='#ADADAD'
                      size='xs'
                      count={6}
                    />
                    <Group noWrap spacing='xs'>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",

                          fontSize: "18px",
                          lineHeight: "19.2px",
                          color: "#253D4E",
                        }}
                      >
                        {product.price}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Quicksand , sans-serif",

                          fontSize: "14px",
                          lineHeight: "18px",
                          color: "#C1C1C1",
                        }}
                      >
                        {product.priceTag}
                      </Text>
                    </Group>
                  </Stack>
                </Group>
              </Card>
            </Grid.Col>
          </Grid>
        ))}
      </Grid.Col>
    </Grid>
  );
};
