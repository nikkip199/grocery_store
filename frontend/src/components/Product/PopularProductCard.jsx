import {
  Image,
  Stack,
  Text,
  Rating,
  Card,
  Badge,
  Button,
  SimpleGrid,
  createStyles,
  Box,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addToCart, increaseCartQuantity,updateToCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPopularProducts,
  getProductById,
} from "../../features/product/productSlice";

const useStyle = createStyles(() => ({
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
      // left: '0px',
      // top: '0px',
    },
  },
  btn: {
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor: "white",
      borderColor: "green",
      color: "green",
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
  txt: {
    "&:hover": {
      color: "teal",
    },
  },
}));
const URL = import.meta.env.VITE_REACT_PRODUCT_IMAGE_URL;

const user = JSON.parse(localStorage.getItem("user"));
// console.log(user);
function PopularProductCard({ isLink }) {
  const { classes } = useStyle();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const {Carts,isLoading}=useSelector((state) => state.cart);
  // console.log("productNik", product.popularProducts.products);

  const [hover, setHover] = useState({
    id: "",
    hover: false,
  });

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

  useEffect(() => {
    dispatch(getAllPopularProducts());
  }, [dispatch]);

  return (
    <>
      {product?.popularProducts === null ? (
        <></>
      ) : (
        <SimpleGrid
          cols={5}
          // VerticalSpacing='lg'
          spacing="lg"
          // justifycontent='space-evenly'
          style={{ justify: "space-evenly" }}
          breakpoints={[
            { maxWidth: "62rem", cols: 2, spacing: "md" },
            { maxWidth: "48rem", cols: 2, spacing: "sm" },
            { maxWidth: "36rem", cols: 1, spacing: "sm" },
          ]}
        >
          {product?.popularProducts?.products?.map((item) => {
            return (
              <Card
                key={item?.id}
                // onClick={isLink==="yes" && {()=>navigate(`product-detail/${item.id}`)}}
                shadow="xs"
                onMouseOver={() => handleMouseEnter(item?.id)}
                onMouseOut={() => handleMouseLeave(item?.id)}
                padding="sm"
                radius="lg"
                sx={{ maxWidth: "rem(180)" }}
                className={classes.card}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justify: "flex-start",
                  }}
                >
                  <Badge className={classes.bdge} size="lg">
                    13%
                  </Badge>
                </Box>
                <Stack align="center">
                  <Box w={130} margin="auto">
                    {hover.hover && hover.id === item?.id ? (
                      <Image
                        width="100%"
                        src={URL + item?.images[1]}
                        className={classes.img}
                      />
                    ) : (
                      <Image
                        width="100%"
                        src={URL + item?.images[0]}
                        className={classes.img}
                      />
                    )}
                  </Box>
                </Stack>
                {/* {/ <Stack  > /} */}
                <Text
                  c="dimmed"
                  fz="sm"
                  sx={{ fontFamily: "Lato, sans-serif", fontSize: "18px" }}
                >
                  {/* {item.subcategories[0].subcategory} */}
                </Text>
                <Text
                  component={Link}
                  to={isLink === "yes" && `product-detail/${item?.id}`}
                  onClick={() => {
                    dispatch(getProductById(item?.id));
                  }}
                  fw={500}
                  className={classes.txt}
                  sx={{
                    fontFamily: "QuickSand, sans-serif",
                    fontSize: "18px",
                    color: "#253D4E",
                  }}
                >
                  {item?.name}
                </Text>
                <Rating defaultValue={1.5} />
                <Text
                  c="teal.3"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "18px",
                    fontWeight: "16px",
                  }}
                >
                  <span>By</span>
                  {item?.brand}
                </Text>
                {/* <Text
                  // c="teal.3"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "18px",
                    fontWeight: "16px",
                  }}
                >
                
                  {item.stock}
                </Text> */}
                {/* {/ </Stack > /} */}
                <Stack
                  // Stack
                  p="sm"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Text
                    c="teal.5"
                    fw={700}
                    sx={{
                      fontFamily: "Lato, sans-serif",
                      fontSize: "18px",
                      fontWeight: "16px",
                    }}
                  >
                    ₹{item?.discount_price}
                  </Text>
                  <Text
                    c="dimmed"
                    td="line-through"
                    fw={500}
                    sx={{
                      fontFamily: "Lato, sans-serif",
                      fontSize: "18px",
                      fontWeight: "16px",
                    }}
                  >
                    ₹{item?.price}
                  </Text>
                  <Button
                    sx={{ backgroundColor: "green", color: "white" }}
                    className={classes.btn}
                    disabled={item?.stock===0 || isLoading}
                    onClick={() => {
                      dispatch(
                        addToCart({
                          productId: item?.id,
                          //  token: user.accessToken,
                          quantity: 1,
                        })
                      );
                     
                    }}
                  >
                    Add
                  </Button>
                </Stack>
              </Card>
            );
          })}
        </SimpleGrid>
      )}
    </>
  );
}

export default PopularProductCard;
