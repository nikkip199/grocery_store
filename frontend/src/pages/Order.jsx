import React, { useState } from "react";
import {
  Grid,
  Paper,
  Container,
  Card,
  Stack,
  Text,
  Button,
  Divider,
  Modal,
  Select,
  Loader,
  LoadingOverlay,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons-react";
import { getAddressbyId, getAddress } from "../features/address/addressSlice";
import { getToCart } from "../features/cart/cartSlice";
import { addToOrder } from "../features/order/orderSlice";
import loadingCartPng from "../assets/loadingCartPng.gif";
import { toast } from "react-toastify";
const Api_URL = import.meta.env.VITE_REACT_USER_URL;
const user = JSON.parse(localStorage.getItem("user"));

function Order() {
  const [value, setValue] = useState("");
  const [visible, { toggle }] = useDisclosure(false);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { Carts } = useSelector((state) => state.cart);
  const { AddressbyId, isLoading } = useSelector((state) => state.address);
  const { Order, isSuccess } = useSelector((state) => state.order);
  const handleClick = () => navigate("/all-product");
  // console.log(Order);

  useEffect(() => {
    dispatch(getAddressbyId(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getToCart());
  }, [dispatch]);
  //  console.log(value);
  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  const placeOrder = () => {
    if (value === "COD" && Carts.length !== 0) {
      dispatch(addToOrder({ value, AddressbyId }));
      if (isSuccess) {
        toast.success("Your order has been successfully added", {
          position: "top-center",
        });
        navigate("/");
      }
    } else {
      dispatch(addToOrder({ value, AddressbyId }));
      console.log("Order online");
      const { order_id, amount } = Order;
      console.log({ order_id, amount });
      const options = {
        key: "rzp_test_RoNhb5DAFJojWp",
        name: "Grocery Store",
        description: "Some Description",
        order_id: order_id,
        amount: Number(amount),
        handler: async (response) => {
          try {
            const data = {
              // orderCreationId: order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };

            // const paymentId = response.razorpay_payment_id;
            const url = `${Api_URL}verify/`;
            const captureResponse = await axios.post(url, data, {
              headers: {
                Authorization: `Bearer ${user.accessToken}`,
              },
            });
            console.log(captureResponse.data);
            toast.success("Your order has been successfully added", {
              position: "top-center",
            });
            navigate("/");
          } catch (err) {
            console.log(err);
          }
        },
        prefill: {
          name: "Soumya Dey",
          email: "SoumyaDey@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#80B82D",
        },
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };

  return (
    <div>
      <Container size="lg" sx={{ margin: "auto" }}>
        <LoadingOverlay visible={visible} overlayBlur={2} />{" "}
        {isLoading ? (
          <Card
            // m="md"
            p="lg"
            shadow="xl"
            radius="lg"
            h={250}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justify: "space-around",
            }}
          >
            <Loader
              size="lg"
              variant="dots"
              color="green"
              pos="center"
              mt={80}
            />
          </Card>
        ) : (
          <>
            {Carts?.card?.length === 0 ? (
              <Card
                m="md"
                p="xs"
                shadow="xl"
                radius="lg"
                h={300}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justify: "space-around",
                }}
              >
                <Text
                  c="red"
                  sx={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "18px",
                    fontWeight: "16px",
                  }}
                >
                  Your Cart is empty
                </Text>
                <div>
                  <img
                    src={loadingCartPng}
                    width={100}
                    height={100}
                    alt="png"
                  />
                </div>
                <Button
                  onClick={handleClick}
                  sx={{
                    backgroundColor: "#80B82D",
                    fontFamily: "Lato, sans-serif",
                    fontSize: "15px",
                    fontWeight: "10px",
                  }}
                >
                  Shop Now
                </Button>
              </Card>
            ) : (
              <Grid gutter={50} m="auto" justify="center">
                <Grid.Col lg={5}>
                  <Text
                    style={{
                      fontFamily: "Quicksand,sans-serif",
                      color: "#4477CE",
                      justifyContent: "flex-end",
                    }}
                    fz="15px"
                    fw="700"
                  >
                    Delivery address
                  </Text>
                  <Paper shadow="lg" p="lg">
                    {/* <Card radius="md" shadow="lg"> */}
                    <Stack>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          sx={{
                            fontFamily: "Lato, sans-serif",
                            fontSize: "16px",
                            fontWeight: "16px",
                          }}
                        >
                          {AddressbyId?.full_name}
                        </Text>
                      </Stack>
                      <Text
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          fontSize: "16px",
                          fontWeight: "16px",
                        }}
                      >
                        {AddressbyId?.address +
                          " " +
                          AddressbyId?.city +
                          " " +
                          AddressbyId?.state}
                      </Text>
                      <Text
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          fontSize: "16px",
                          fontWeight: "16px",
                        }}
                      >
                        {AddressbyId?.contact}
                      </Text>
                      <Select
                        placeholder="Select payment method"
                        rightSection={<IconChevronDown size="1rem" />}
                        dropdownPosition="bottom"
                        variant="filled"
                        rightSectionWidth={30}
                        styles={(theme) => ({
                          item: {
                            // applies styles to selected item
                            "&[data-selected]": {
                              "&, &:hover": {
                                backgroundColor: theme.colors.green,
                                color: theme.white,
                              },
                            },

                            // applies styles to hovered item (with mouse or keyboard)
                            "&[data-hovered]": {},
                          },
                        })}
                        value={value}
                        // onChange={()=>{handleChange();setValue}}

                        onChange={setValue}
                        // if(value==="online")
                        data={[
                          { label: "Cash on delievery", value: "COD" },
                          { label: "Online Payment", value: "online" },
                        ]}
                        // onClick={handleChange}
                      />
                      {/* <Button sx={{ backgroundColor: "#80B82D",}}>Confirm all Details</Button> */}
                    </Stack>
                  </Paper>
                </Grid.Col>
                <Grid.Col lg={4}>
                  <Card radius="md" shadow="xl">
                    <h3
                      style={{
                        fontFamily: "Lato, sans-serif",
                        fontSize: "15px",
                      }}
                    >
                      Price details
                    </h3>
                    <Divider mb={10} />
                    <Stack>
                      <Text
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          fontSize: "16px",
                          fontWeight: "12px",
                        }}
                      >
                        Quantity :{Carts?.totalQuantity}
                      </Text>
                      <Text
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          fontSize: "16px",
                          fontWeight: "12px",
                        }}
                      >
                        Price :${Carts?.totalPrice}
                      </Text>

                      <Button
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          fontSize: "16px",
                          backgroundColor: "#80B82D",
                        }}
                        onClick={placeOrder}
                      >
                        Place Order
                      </Button>
                      {/* <Button onClick={handleOpenRazorpay}>Pay</Button> */}
                      {/* </Stack> */}
                    </Stack>
                  </Card>
                </Grid.Col>
              </Grid>
            )}
          </>
        )}
      </Container>
    </div>
  );
}

export default Order;
