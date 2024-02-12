import { useEffect } from "react";
import {
  Box,
  Card,
  Container,
  Image,
  Text,
  Stack,
  Button,
  Grid,
  Divider,
} from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { banner14 } from "../assets/imgImport";
import {
  RemoveToCart,
  decreaseCartQuantity,
  increaseCartQuantity,
  getTotal,
} from "../features/cartSlice";
// import { IconChevronDown } from "@tabler/icons-react";

function Cart() {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  let shippingCharge = 20;
  var total = parseFloat(totalAmount) + shippingCharge;
  console.log(typeof shippingCharge);
  // const cardItemTotal = useSelector((state) => state.cart.cardItemTotal);
  // const cartItemQuantity = useSelector((state) => state.cart.cartItemQuantity);

  const { Carts } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch]);

  console.log("cart", Carts);

  return (
    <Container size='md' sx={{ margin: "auto" }}>
      <Grid gutter={30} m='auto'>
        <Grid.Col lg={7}>
          {Carts?.map((cItem) => ( 
              <Card
                key={cItem.id}
                m='md'
                p='xs'
                shadow='xl'
                radius='lg'
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justify: "space-around",
                }}
              >
                <Image width={150} height={150} src={cItem.productImg} />
                <Stack>
                  <Text
                    c='teal.5'
                    sx={{
                      fontFamily: "Lato, sans-serif",
                      fontSize: "18px",
                      fontWeight: "16px",
                    }}
                  >
                    {cItem.name}
                  </Text>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justify: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      c='teal.5'
                      fw={700}
                      sx={{
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                        fontWeight: "16px",
                      }}
                    >
                      ₹{cItem.discountPrice}
                    </Text>
                    <Text
                      c='dimmed'
                      td='line-through'
                      fw={500}
                      sx={{
                        fontFamily: "Lato, sans-serif",
                        fontSize: "18px",
                        fontWeight: "16px",
                      }}
                    >
                      ${cItem.originalPrice}
                    </Text>
                    $
                    {parseFloat(cItem.discountPrice * cItem.quantity).toFixed(
                      2
                    )}
                  </Stack>
                  <Stack
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justify: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      size='xs'
                      variant='default'
                      radius='xl'
                      onClick={() => dispatch(increaseCartQuantity(cItem))}
                    >
                      +
                    </Button>
                    {cItem.quantity}
                    <Button
                      size='xs'
                      variant='default'
                      radius='xl'
                      onClick={() => dispatch(decreaseCartQuantity(cItem))}
                    >
                      -
                    </Button>
                  </Stack>
                </Stack>
                <Button
                  size='xs'
                  variant='subtule'
                  sx={{
                    justify: "flex-end",
                    top: "-70px",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "15px",
                  }}
                  onClick={() => dispatch(RemoveToCart(cItem))}
                >
                  X
                </Button>
              </Card>
        
          ))}
        </Grid.Col>
        <Grid.Col lg={4}>
          <Box
            h={300}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",

              position: "cover",
            }}
          >
            <Image src={banner14} />
          </Box>
          <Card radius='lg' shadow='xl'>
            <h3>Price details</h3>
            <Divider mb={10} />
            <Stack>
              <Text>Quantity : {totalQuantity}</Text>
              <Text>Price : ${totalAmount}</Text>
              <Text>Delievery Charge : ${shippingCharge} </Text>

              <Text>Total :${total}</Text>
              <Button color='green'>Proceed to Checkout</Button>
            </Stack>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Cart;
