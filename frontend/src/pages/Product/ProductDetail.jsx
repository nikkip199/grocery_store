import {
  Badge,
  Grid,
  NumberInput,
  Button,
  Rating,
  Stack,
  Text,
  Title,
  Box,
  createStyles,
  Card,
} from "@mantine/core";

import { product02_1, product02_2 } from "../../assets/imgImport";
import ChipsCard from "../../components/chips/ChipsCard";
import SideBanner from "../../components/Banner/SideBanner";
import Subcategory from "../../components/menu/Subcategory";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import ProductDescription from "../../components/Product/ProductDescription";
import FilterProductCard from "../../components/Product/FilterProductCard";
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice";
import { useEffect } from "react";
import { getProductById } from "../../features/product/productSlice";
import { useParams } from "react-router-dom";
const img_URL = import.meta.env.VITE_REACT_PRODUCT_IMAGE_URL;
const productArray = [
  {
    id: 1,
    src: product02_1,

    name: "Seeds of Change Organic Red Rice",

    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 2,
    src: product02_1,

    name: "Seeds of Change Organic Red Rice",

    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 3,
    src: product02_1,

    name: "Seeds of Change Organic Red Rice",

    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 4,
    src: product02_1,

    name: "Seeds of Change Organic Red Rice",

    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
];
const chipData = [
  { id: 1, title: "Brown " },
  { id: 2, title: "Coffees" },
  { id: 3, title: "Creams" },
  { id: 4, title: "Hodo Food" },
  { id: 5, title: "Meat" },
  { id: 6, title: "Snack" },
  { id: 7, title: " Organic" },
  { id: 8, title: "Vegetables" },
];
const productData = [
  {
    id: 1,
    productImg: product02_1,
    backImg: product02_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 2,
    productImg: product02_1,
    backImg: product02_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 3,
    productImg: product02_1,
    backImg: product02_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 4,
    productImg: product02_1,
    backImg: product02_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 5,
    productImg: product02_1,
    backImg: product02_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
];
const useStyles = createStyles(() => ({
  heading: {
    fontFamily: "QuickSand, sans-serif",
  },
  txt: {
    fontFamily: "Lato, sans-serif",
  },
  btn: {
    fontFamily: "Lato, sans-serif",
    "&:hover": {
      backgroundColor: "#fcb900",
    },
  },
}));
function ProductDetail() {
  const { classes } = useStyles();
  const {singleProduct}=useSelector((state)=>state.product)
  const dispatch=useDispatch();
  const {id}=useParams();
  console.log(id)
  useEffect(()=>{dispatch(getProductById(id))},[dispatch])
  console.log(singleProduct)
   
  return (
    <>
      <Grid>
        <Grid
          gutter={10}
          justify="space-around"
          sx={{ marginBottom: "20px", marginTop: "15px" }}
        >
          <Grid.Col lg={4} sm={12} md={12} p="lg">
            <Box
              sx={{
                width: "350px",
                margin: "auto",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
              }}
            >
              <InnerImageZoom width="100%" src={img_URL+singleProduct.thumbnail} zoomType="hover" />
            </Box>
          </Grid.Col>
          <Grid.Col lg={5} sm={12} md={12} p="md">
            <Badge
              size="lg"
              radius="sm"
              className={classes.txt}
              sx={{
                backgroundColor: "#fde0e9",
                color: "#61ce70",
                marginBottom: "10px",
                textTransform: "capitalize",
              }}
            >
              Sale!
            </Badge>
            <Stack>
              <Title order={1} className={classes.heading}>
               {singleProduct.name}
              </Title>

              <Stack sx={{ display: "flex", flexDirection: "row" }}>
                <Rating defaultValue={5} />
                (3 customer review)
              </Stack>
              <Stack sx={{ display: "flex", flexDirection: "row" }}>
                <Text td="line-through" c="dimmed" className={classes.txt}>
                ${singleProduct.discount_price}
                </Text>
                <Text c="#80B82D" td="underline" className={classes.txt}>
                 ${singleProduct.price}
                </Text>
                {/* "#80B82D" */}
              </Stack>
              <Text lineClamp={4} size="sm" className={classes.txt}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                provident eos fugiat id necessitatibus magni ducimus molestias.
                Placeat, consequatur reewe gh uyrjh dffdyu.loremp
                curlfatibusvolumfvdfv.vbar
              </Text>
              <Text c="#77a464" className={classes.txt}>
              Stock : {singleProduct.stock}
              </Text>
              <Stack sx={{ display: "flex", flexDirection: "row" }}>
                <NumberInput
                  size="lg"
                  radius="md"
                  min={0}
                  w={110}
                  // color="#20c997"
                  sx={{
                    border: "1px solid",
                    borderColor: "#20c997",
                    borderRadius: "10px",
                  }}
                  defaultValue={1}
                />
                <Button
                  sx={{
                    width: "140px",
                    height: "48px",
                    backgroundColor: "#20c997",
                    padding: "10px",
                  }}
                  className={classes.btn}
                  onClick={()=>{dispatch(addToCart({productId:singleProduct.id,quantity:1}))}}
                >
                  Add to Cart
                </Button>
              </Stack>
              <Stack sx={{ display: "flex", flexDirection: "row" }}>
                <Badge
                  size="xl"
                  radius="sm"
                  p="lg"
                  color="gray"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    textTransform: "capitalize",
                  }}
                  variant="outline"
                >
                  Compare
                </Badge>
                <Badge
                  size="xl"
                  radius="sm"
                  p="lg"
                  color="gray"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    textTransform: "capitalize",
                  }}
                  variant="outline"
                >
                  Wishlist
                </Badge>
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col lg={3} sm={12} md={12}>
            <Card
              p="md"
              radius="lg"
              sx={{
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                width: "270px",
              }}
            >
              <Stack>
                <Subcategory/>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Grid gutter={60} justify="space-around">
          <Grid.Col lg={9} sm={12} md={9}>
            <ProductDescription />
          </Grid.Col>
          <Grid.Col lg={3} sm={12} md={12}>
            <Stack>
              <ChipsCard chips={chipData} />
              <SideBanner />
            </Stack>
          </Grid.Col>
        </Grid>

        {/* <FilterProductCard Items={productArray} /> */}
      </Grid>
    </>
  );
}

export default ProductDetail;
