import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
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
import { product03_1 } from "../../assets/imgImport";
import { getProductById } from "../../features/product/productSlice";
const user = JSON.parse(localStorage.getItem("user"));
// console.log(user.accessToken);
function ProductCard({ Items }) {
  const [close, setClose] = useState({ id: "", status: true });
  const { Carts, isLoading } = useSelector((state) => state.cart);
  // yaha pr jab item ko map kiya hai un sbme optional channing lgao
  // and vo hover.hover and hover.id kaha se aata hai
  const { classes } = useStyle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const handleDisabled = (id) => {
  //   console.log(id)
  //   if (id && isLoading) {
  //      setClose({
  //       id: id,
  //       status:true,
  //     });
  //   }
  // };
  return (
    <>
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
        {Items?.map((item) => {
          return (
            <Card
              key={item.id}
              // onClick={isLink==="yes" && {()=>navigate(`product-detail/${item.id}`)}}
              shadow="xs"
              //   onMouseOver={() => handleMouseEnter(item.id)}
              //   onMouseOut={() => handleMouseLeave(item.id)}
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
                  <Image
                    width="100%"
                    // src={product03_1}
                    src={URL + item.thumbnail || product03_1}
                    className={classes.img}
                  />
                </Box>
              </Stack>

              <Text
                c="dimmed"
                fz="sm"
                sx={{ fontFamily: "Lato, sans-serif", fontSize: "18px" }}
              ></Text>
              <Text
                fw={500}
                className={classes.txt}
                sx={{
                  fontFamily: "QuickSand, sans-serif",
                  fontSize: "18px",
                  color: "#253D4E",
                }}
                // component={Link}
                //   to={`product-detail/${item.id}`}
                onClick={() => {
                  // dispatch(getProductById(item.id));
                  navigate(`/product-detail/${item.id}`);
                }}
              >
                {item.name}
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
                {item.brand}
              </Text>
              <Text
                // c="teal.3"
                sx={{
                  fontFamily: "Lato, sans-serif",
                  fontSize: "18px",
                  fontWeight: "16px",
                  color: "#253D4E",
                }}
              >
                Stock : {item.stock}
              </Text>
              {/* {/ </Stack > /} */}
              <Stack
                // Stack
                p="sm"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  // alignItems: "center",
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
                  ₹{item.discount_price}
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
                  ₹{item.price}
                </Text>
                <Button
                  sx={{ backgroundColor: "green", color: "white" }}
                  className={classes.btn}
                  disabled={isLoading}
                  onClick={() => {
                    dispatch(
                      addToCart({
                        productId: item.id,
                        // token: user.accessToken,
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
    </>
  );
}

export default ProductCard;
