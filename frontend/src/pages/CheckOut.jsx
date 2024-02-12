import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconTrashX } from "@tabler/icons-react";
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
  Loader
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addAddress,
  getAddress,
  getAddressbyId,
  removeAddress,
} from "../features/address/addressSlice";
import { getToCart, updateToCart } from "../features/cart/cartSlice";
import AddressForm from "./../components/form/AddressForm";
import loadingCartPng from "../assets/loadingCartPng.gif";
const CheckOut = () => {
  // const [open, setOpen] = useState(false);

  const { Carts } = useSelector((state) => state.cart);
  const { Address, isLoading } = useSelector((state) => state.address);
  const [opened, { open, close }] = useDisclosure(false);
  console.log(Address);
  // check out cart using cart functionality
  const dispatch = useDispatch();
  console.log("form", Address);
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getToCart());
  }, [dispatch]);
  useEffect(() => {
    dispatch(updateToCart());
  }, [dispatch]);

  return (
    <Container size="lg" sx={{ margin: "auto" }}>
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
          <Loader size="lg" variant="dots" color="green" pos="center" mt={80} />
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
                <img src={loadingCartPng} width={100} height={100} alt="png" />
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
                <Button
                  style={{
                    fontFamily: "Quicksand,sans-serif",
                    color: "#4477CE",
                    justifyContent: "flex-end",
                  }}
                  fz="15px"
                  fw="700"
                  variant="transparent"
                  onClick={open}
                >
                  +Add address
                </Button>
                <Card shadow="md">
                  <Modal
                    opened={opened}
                    onClose={close}
                    withCloseButton={false}
                  >
                    <AddressForm />
                  </Modal>
                  {Address?.map((loc) => (
                    <Card radius="md" key={loc?.id} shadow="lg">
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
                            key={loc?.id}
                          >
                            {loc?.full_name}
                          </Text>
                          {/* <Button variant="transparent">Edit</Button> */}
                          <Button
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              justifyContent: "flex-end",
                            }}
                            variant="transparent"
                            onClick={() => {
                              dispatch(removeAddress(loc.id));
                            }}
                          >
                            <IconTrashX stroke={1} size="15px" color="red" />
                          </Button>
                        </Stack>
                        <Text
                          sx={{
                            fontFamily: "Lato, sans-serif",
                            fontSize: "16px",
                            fontWeight: "16px",
                          }}
                        >
                          {loc?.address + " " + loc?.city + " " + loc?.state}
                        </Text>
                        <Text
                          sx={{
                            fontFamily: "Lato, sans-serif",
                            fontSize: "16px",
                            fontWeight: "16px",
                          }}
                        >
                          {loc?.contact}
                        </Text>
                        <Button
                          sx={{ backgroundColor: "#80B82D" }}
                          onClick={() => {
                            // dispatch(getAddressbyId(loc?.id)),
                            navigate(`/payment/${loc?.id}`);
                          }}
                        >
                          Deliever to this Address
                        </Button>
                      </Stack>
                    </Card>
                  ))}
                </Card>
              </Grid.Col>
              <Grid.Col lg={4}>
                <Card radius="md" shadow="xl">
                  <h3
                    style={{ fontFamily: "Lato, sans-serif", fontSize: "15px" }}
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
                      Price :₹{Carts?.totalPrice}
                    </Text>
                   
                    <Button
                      sx={{
                        backgroundColor: "#80B82D",
                        fontFamily: "Lato, sans-serif",
                        fontSize: "16px",
                        fontWeight: "10px",
                      }}
                      onClick={() => {
                        navigate("/cart");
                      }}
                    >
                      Back to Cart
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            </Grid>
          )}
        </>
      )}
    </Container>
  );
};

export default CheckOut;
{
  /* <Paper>{
                (Address.address.map((loc) => (
                  <Card radius="lg">
                    <Stack>
                      <Stack
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text key={loc.id}>{loc.full_name}</Text>
                        <Button variant="transparent">Edit</Button>
                      </Stack>
                      <Text>
                        {loc.address + " " + loc.city + " " + loc.state}
                      </Text>
                      <Text>{loc.contact}</Text>
                      <Button onClick={handleSubmit}>Confirm Address</Button>
                    </Stack>
                  </Card>
              
              </Paper> */
}
