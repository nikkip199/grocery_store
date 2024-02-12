import {
  Box,
  Image,
  Grid,
  Stack,
  Text,
  Rating,
  Card,
  Badge,
  Button,
  createStyles,
  getStylesRef,
  Progress,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useState } from "react";
// import { product01_1, product01_2 } from "../../assets/imgImport";
import { SideCard } from "../sideCard/SideCard";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

// const productArray = [
//   {
//     id: 1,
//     // productImg: product01_1,
//     // backImg: product01_2,
//     title: "Fresh Fruit",
//     name: "Seeds of Change Organic Red Rice",
//     desc: "Food",
//     discountPrice: "$28.85",
//     originalPrice: "$32.00",
//   },
//   {
//     id: 2,
//     // productImg: product01_1,
//     // backImg: product01_2,
//     title: "Fresh Fruit",
//     name: "Seeds of Change Organic Red Rice",
//     desc: "Food",
//     discountPrice: "$28.85",
//     originalPrice: "$32.00",
//   },
//   {
//     id: 3,
//     // productImg: product01_1,
//     // backImg: product01_2,
//     title: "Fresh Fruit",
//     name: "Seeds of Change Organic Red Rice",
//     desc: "Food",
//     discountPrice: "$28.85",
//     originalPrice: "$32.00",
//   },
//   {
//     id: 4,
//     // productImg: product01_1,
//     // backImg: product01_2,
//     title: "Fresh Fruit",
//     name: "Seeds of Change Organic Red Rice",
//     desc: "Food",
//     discountPrice: "$28.85",
//     originalPrice: "$32.00",
//   },
//   {
//     id: 5,
//     // productImg: product01_1,
//     // backImg: product01_2,
//     title: "Fresh Fruit",
//     name: "Seeds of Change Organic Red Rice",
//     desc: "Food",
//     discountPrice: "$28.85",
//     originalPrice: "$32.00",
//   },
// ];
const Header2_Links = [
  {
    id: 1,
    link: "",
    label: "All",
  },
  { id: 2, link: "", label: "Deals of the Day" },
  { id: 3, link: "", label: "Beauty" },
  { id: 4, link: "", label: "Bread abd Juices" },
  { id: 5, link: "", label: "Drinks" },
  { id: 6, link: "", label: "Milk" },
];
const useStyle = createStyles((theme) => ({
  gridCol: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  card: {
    position: "relative",
    lineHeight: 1,
    "&:hover": {
      border: "1px solid",
      borderColor: "green",
      transform: "scale(1.05)",
    },
  },
  img: {
    position: "relative",
    "&:hover": {
      transform: "scale(1.05)",
      zIndex: "-1",
    },
  },
  btn: {
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "white",
      borderColor: "teal",
      color: "teal",
    },
  },
  bdge: {
    position: "relative",
    top: "-12px",
    marginLeft: "-12px",
    borderRadius: "15px 0 20px",
    backgroundColor: "skyblue",
    color: "white",
  },
  line: {
    "&:hover": {
      // transition: "width 2s",
      transition: "transform 150ms ease, box-shadow 100ms ease",
    },
  },
  txt: {
    "&:hover": {
      color: "teal",
    },
  },
  carousel: {
    position: "relative",
    padding: "20px",
    width: "100%",
    //alignItems: "center",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justify: "center",
  },
  carouselControls: {
    ref: getStylesRef("carouselControls"),
    position: "absolute",
    zIndex: 1,
    left: "10px",
    top: "-60px",
    display: "flex",
    flexDirection: "row",
    justify: "flex-start",
    gap: 5,
  },
}));

// fetching product data from mock api server
const getProudct = async () => {
  const { data } = await axios.get(
    "https://6499375879fbe9bcf83ec7da.mockapi.io/grocery/grocery"
  );
  return data;
};

function BestProduct() {
  const { classes } = useStyle();
  const [hover, setHover] = useState({
    id: "",
    hover: false,
  });

  let isLink = "no";

  const handleMouseEnter = (id) => {
    if (id)
      return setHover({
        id: id,
        hover: true,
      });
  };

  const handleMouseLeave = (id) => {
    if (id) return setHover({ id: "", hover: false });
  };

  const { data, isError, error } = useQuery("fetchingProduct", getProudct);

  if (isError) return <div>Request failed...{error.message}</div>;

  return (
    <>
      <Heading heading={"Daily Best Sells"} links={Header2_Links} />

      <Grid gutter={20}>
        <Grid.Col lg={3} className={classes.gridCol}>
          <SideCard />
        </Grid.Col>

        <Grid.Col lg={9} sm={12}>
          <Carousel
            bg='white'
            slideGap='sm'
            slidesToScroll={1}
            align='start'
            breakpoints={[
              { maxWidth: "md", slideSize: "100%" },
              { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
            ]}
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
            }}
            nextControlIcon={<IconArrowNarrowRight color='green' size={26} />}
            previousControlIcon={
              <IconArrowNarrowLeft color='green' size={26} />
            }
          >
            {/* map api data */}
            {data?.map((item) => (
              <Carousel.Slide
                key={item.id}
                p='xs'
                w='100%'
                size='normal'
                sx={{
                  position: "relative",
                  display: "flex",
                  flexWrap: "wrap",
                  alignContent: "center",
                }}
                loop
              >
                <Card
                  component={Link}
                  to={isLink === "yes" && `product-detail/${item.id}`}
                  shadow='xs'
                  onMouseOver={() => handleMouseEnter(item.id)}
                  onMouseOut={() => handleMouseLeave(item.id)}
                  padding='sm'
                  radius='lg'
                  sx={{ maxWidth: "257px" }}
                  className={classes.card}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justify: "flex-start",
                    }}
                  >
                    <Badge className={classes.bdge} size='lg'>
                      13%
                    </Badge>
                  </Box>

                  <Stack align='center'>
                    <Box w={120} margin='auto'>
                      {hover.hover && hover.id === item.id ? (
                        <Image
                          width='100%'
                          src={item.backImg}
                          className={classes.img}
                        />
                      ) : (
                        <Image
                          width='100%'
                          src={item.image}
                          className={classes.img}
                        />
                      )}
                    </Box>
                  </Stack>

                  <Text
                    c='dimmed'
                    sx={{ fontFamily: "Lato, sans-serif", fontSize: "16px" }}
                    fz='sm'
                  >
                    {item.title}
                  </Text>
                  <Text
                    fw={500}
                    sx={{ fontFamily: "Lato, sans-serif", fontSize: "16px" }}
                    className={classes.txt}
                  >
                    {item.name}
                  </Text>
                  <Rating defaultValue={1.5} />

                  <Stack
                    p='sm'
                    sx={{
                      display: "flex",
                      flexDirection: "row",

                      alignItems: "center",
                    }}
                  >
                    <Text
                      c='teal.5'
                      sx={{ fontFamily: "Lato, sans-serif" }}
                      fw={700}
                    >
                      {item.discountPrice}
                    </Text>
                    <Text
                      c='dimmed'
                      sx={{ fontFamily: "Lato, sans-serif" }}
                      td='line-through'
                      fw={500}
                    >
                      {item.origionalPrice}
                    </Text>
                  </Stack>
                  <Stack>
                    <Progress
                      radius='xs'
                      size='sm'
                      value={50}
                      color='teal'
                      className={classes.line}
                    />
                    <Text c='dimmed'>Sold: 341/500</Text>
                    <Button
                      sx={{ backgroundColor: "green", color: "white" }}
                      className={classes.btn}
                    >
                      Add
                    </Button>
                  </Stack>
                </Card>
              </Carousel.Slide>
            ))}
          </Carousel>
        </Grid.Col>
        {/* {data?.map((post) => (
          <div key={post.id}>
            <p>{post.description}</p>
            <p>{post.origionalPrice}</p>
            <p>{post.discountPrice}</p>
          </div>
        ))} */}
      </Grid>
    </>
  );
}

export default BestProduct;
