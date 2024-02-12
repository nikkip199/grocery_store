import {
  Card,
  Image,
  Stack,
  Text,
  createStyles,
  getStylesRef,
  Title,
} from "@mantine/core";
// import { cat1 } from "../../assets/imgImport";
import { Carousel } from "@mantine/carousel";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import axios from "axios";
import {
  getAllCategories,
  getProductByCategories,
} from "../../features/category/categorySlice";
import { Navigate, useNavigate } from "react-router-dom";

const useStyle = createStyles(() => ({
  card: {
    "&:hover": {
      Color: "green",
      transform: "scale(1.05)",
    },
  },
  img: {
    "&:hover": {
      transform: "scale(1.02)",
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
    justifyContent: "center",
  },
  carouselControls: {
    ref: getStylesRef("carouselControls"),
    position: "absolute",
    zIndex: 1,
    left: "10px",
    top: "-28px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 5,
  },
  heading: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "16px",
    lineHeight: "2px",
    textAlign: "center",
    color: "#253D4E",
    "&:hover": {
      color: "green",
    },
  },
  subtitle: {
    fontFamily: "Lato, sans-serif",
    fontSize: "14px",
    lineHeight: "2px",
    textAlign: "center",
    color: "#7E7E7E",
  },
}));
const cardColor = [
  {
    id: 1,

    color: "#FFFCEB ",
  },
  {
    id: 2,

    color: " #FFF3FF",
  },
  { id: 3, color: "#F2FCE4 " },
  {
    id: 4,

    color: "#FFF3EB ",
  },
  { id: 5, color: "#FEEFEA " },
  {
    id: 6,

    color: "#ECFFEC ",
  },
  {
    id: 7,

    color: " #F2FCE4",
  },
  {
    id: 8,

    color: "#FFFCEB ",
  },
  {
    id: 9,

    color: "#FFF3FF ",
  },
  {
    id: 10,

    color: "#FEEFEA ",
  },
  {
    id: 11,

    color: "#ECFFEC ",
  },
];
const URL = import.meta.env.VITE_REACT_CATEGORY_IMAGE_URL;
function ProductGallery() {
  const [itemId,setItemId]=useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  console.log("categ", categories);
  const { classes } = useStyle();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  const navigate = useNavigate();
  const getColors = (index) => {
    if (index > cardColor.length - 1) {
      return cardColor[index - cardColor.length]?.color;
    }
    return cardColor[index]?.color;
  };
  return (
    <>
      <Text
        style={{
          fontFamily: "Quicksand, sans-serif",
          fontSize: "32px",
          lineHeight: "30px",
          marginTop: "5px",
          marginLeft: "20px",
          paddingTop: "15px",
        }}
      >
        Featured Categories
      </Text>
      <Carousel
        mt={10}
        loop
        bg="white"
        slideGap="sm"
        slidesToScroll={1}
        align="start"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "50%", slideGap: 0 },
        ]}
        classNames={{
          root: classes.carousel,
          controls: classes.carouselControls,
        }}
      >
        {categories?.data?.map((item, index) => (
          <Carousel.Slide
            key={item.id}
            // p="xs"
            w="100%"
            size="normal"
            sx={{ backgroundColor: "white" }}
          >
            <Card
              bg={getColors(index)}
              sx={{
                // backgroundColor: "#7bdcb5",
                width: "214.21px",
                height: "180px",
                borderRadius: "10px",

                // backgroundColor:{item.color},
              }}
              onClick={() => {
                // dispatch(getProductByCategories(item.id));
                setItemId(item.id);
                navigate(`/categoryDetail/${item.id}`);
              }}
              className={classes.card}
            >
              <Stack>
                <Image
                  src={URL + item.category_images}
                  className={classes.img}
                  style={{
                    width: "80px",
                    height: "80px",

                    marginLeft: "50px",
                    borderRadius: "10px",
                  }}
                />

                <Title className={classes.heading}>{item.name}</Title>
                <Text className={classes.subtitle}>{item.items} items</Text>
              </Stack>
            </Card>
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}

export default ProductGallery;
