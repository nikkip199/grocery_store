import {
  createStyles,
  Anchor,
  Grid,
  Flex,
  Box,
  Text,
  Group,
  Indicator,
  Menu,
} from "@mantine/core";
import { IconUserCircle, IconShoppingCart } from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { toast } from "react-toastify";
import { IconFlame } from "@tabler/icons-react";
import { MegaMenu } from "../menu/MegaMenu";

import MenuHeadingDropdown from "../menu/MenuHeadingDropdown";
import { SubcategoryDropdown } from "../menu/SubcategoryDropdown";
import { getToCart } from "../../features/cart/cartSlice";

import { useEffect } from "react";

const pages = [
  "About us",
  "Contact",
  "My account",
  "Shop Cart",
  "Shop Compare",
  "Shop Wishlist",
  "Checkout",
  "Privacy Policy",
  "Refund and Return Policy",
];

const vendors = ["Dashboard", "Store Listing", "Store Details", "My Orders"];
const blog = [
  "Blog Default",
  "Blog Grid",
  "Blog List",
  "Blog Big",
  "Blog Wide",
  "single Blog",
];

const useStyles = createStyles(() => ({
  Typo: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#253D4E",
    fontWeight: "700px",
  },
  anchor: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "18px",
    lineHeight: "20px",
    color: "#253D4E",
    // color: "red",
    textDecoration: "none",
    fontWeight: "700px",
    "&:hover": {
      color: "#80B82D",
      textDecoration: "none",
    },
  },
}));
export const Menus = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const { Carts } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };
  const { user } = useSelector((state) => state.login);

  useEffect(() => {
    dispatch(getToCart());
  }, [dispatch]);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  // logout popup
  const notify = () => {
    toast.success("Logout successful..!", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <Box
      style={{
        width: "100%",
        // height: "87px",
      }}
    >
      <Grid>
        <Grid.Col span={12}>
          <Flex>
            <Grid.Col lg={3}>
              {/* custom component... */}
              <SubcategoryDropdown />
              {/* end here.... */}
            </Grid.Col>
            <Grid.Col lg={9}>
              <Flex
                mih={50}
                gap="md"
                justify="center"
                align="center"
                direction="row"
                wrap="wrap"
              >
                {/* <Text className={classes.anchor} style={{ }}> */}
                <Group position="center">
                  <IconFlame color="#80B82D" />
                  <Text
                    style={{
                      fontFamily: "Quicksand, sans-serif",
                      fontSize: "18px",
                      lineHeight: "20px",
                      color: "#253D4E",
                      cursor: "pointer",
                      marginRight: "20px",
                    }}
                    className={classes.anchor}
                    onClick={() => {
                      navigate("/all-product");
                    }}
                  >
                    Hot Deals
                  </Text>
                </Group>

                {/* custom component */}
                <MenuHeadingDropdown dropdownContent={pages} heading={"Home"} />
                {/* end here.... */}

                <Anchor
                  component={Link}
                  to={"/"}
                  target="_self"
                  className={classes.anchor}
                  mr={"45px"}
                >
                  About
                </Anchor>
               

                {/* importing Shop section with mega menu */}
                <Anchor
                  href="#"
                  target="_self"
                  mr={"45px"}
                  className={classes.anchor}
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "16px",
                    fontWeight: "16px",

                    cursor: "pointer",
                  }}
                >
                  <MegaMenu />
                </Anchor>
                <Anchor
                  component={Link}
                  to={"/"}
                  target="_self"
                  className={classes.anchor}
                  mr={"45px"}
                >
                  Contact
                </Anchor>
                {/* custom component  */}

                {/* end here... */}
                <Anchor
                  href="#"
                  target="_self"
                  mr={"45px"}
                  className={classes.anchor}
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "18px",
                    fontWeight: "600px",

                    cursor: "pointer",
                  }}
                >
                  {/* Mega Menu */}
                  <Text className={classes.anchor} onClick={handleClick}>
                    <Group spacing={6} ml={5}>
                      <Indicator
                        size={15}
                        label={Carts.totalQuantity || 0}
                        color="#80B82D"
                        radius="xl"
                        position="Top-center"
                        ml={3}
                      >
                        <IconShoppingCart color="#253D4E" />
                      </Indicator>
                      {/* <IconShoppingCart color='#253D4E' /> */}
                      Cart
                    </Group>
                  </Text>
                </Anchor>

                {/* Blog custom component */}

                {/* end here... */}
                <Anchor
                  component={Link}
                  to={"/"}
                  target="_self"
                  className={classes.anchor}
                  mr={"45px"}
                >
                  Orders
                </Anchor>

                <Text className={classes.anchor} style={{ cursor: "pointer" }}>
                  <Group spacing={6} ml={5}>
                    <IconUserCircle color="#253D4E" />
                    {/* link login and sign up form  */}
                    <Menu>
                      <Menu.Target>
                        <Text
                          style={{
                            cursor: "pointer",
                            fontFamily: "Quicksand, sans-serif",
                            fontSize: "18px",
                          }}
                        >
                          Account
                        </Text>
                      </Menu.Target>
                      <Menu.Dropdown style={{ padding: "15px" }}>
                        {user ? (
                          <Menu.Label onClick={notify}>
                            <Text
                              className="textDropdown"
                              onClick={onLogout}
                              style={{
                                cursor: "pointer",
                                fontFamily: "Quicksand, sans-serif",
                                fontSize: "18px",
                              }}
                            >
                              {" "}
                              Logout
                            </Text>
                          </Menu.Label>
                        ) : (
                          <>
                            <Menu.Label>
                              <Text
                                className="textDropdown"
                                component={Link}
                                to={"login"}
                                style={{
                                  cursor: "pointer",
                                  fontFamily: "Quicksand, sans-serif",
                                  fontSize: "18px",
                                }}
                              >
                                {" "}
                                Login
                              </Text>
                            </Menu.Label>
                            <Menu.Label>
                              <Text
                                component={Link}
                                to={"sign-up"}
                                className="textDropdown"
                                style={{
                                  cursor: "pointer",
                                  fontFamily: "Quicksand, sans-serif",
                                  fontSize: "18px",
                                }}
                              >
                                Sign Up
                              </Text>
                            </Menu.Label>
                          </>
                        )}
                      </Menu.Dropdown>
                    </Menu>

                    {/* end here... */}
                  </Group>
                </Text>
              </Flex>
            </Grid.Col>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};
