// import { IconChevronDown } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { Menus } from "./Menus";
import { useState, useEffect } from "react";
import {
  Text,
  Anchor,
  createStyles,
  Grid,
  Flex,
  Group,
  Divider,
  Burger,
  Paper,
  Menu,
  Indicator,
  Container,
} from "@mantine/core";
import {
  IconHeart,
  IconShoppingCart,
  IconUserCircle,
  IconRefresh,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { logout, reset } from "../../features/auth/authSlice";
// import { toast } from "react-toastify";
import SearchHomeFilter from "./SearchHomeFilter";
// import { useDispatch, useSelector } from "react-redux";

const useStyles = createStyles((theme) => ({
  vendor: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "14px",
    lineHeight: "26px",
    // width: "132px",
    backgroundColor: "#FFFFFF",
    color: "#253D4E",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
  Typo: {
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    lineHeight: "13px",
    color: "#7E7E7E",
    "&:hover": {
      color: "black",
    },
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  logo: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "55px",
    lineHeight: "68.75px",
    width: "132px",
    color: "#253D4E",
    fontWeight: "600px",
  },
  input: {
    position: "absolute",
    minWidth: "493px",
    // minHeight: "60px",
    // marginTop: "20ox",
    radius: "4px",
    borderColor: "#E6F1D5",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  button: {
    backgroundColor: "#80B82D",
    color: "white",
    borderRadius: "3px",
    height: "35px",
    width: "90px",
    left: "405px",
    top: "0%",
    "&:hover": {
      transform: "scale(1.05)",
      textDecoration: "none",
      backgroundColor: "#fed330",
    },

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  // burger
  burger: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justify: "space-between",
  },

  menu: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  textDropdown: {
    fontFamily: "Lato, sans-serif",
    fontWeight: "600",
    fontSize: "13px",
    color: "#7e7e7e",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
      textDecoration: "none",
      color: "#80B82D",
    },
  },
}));

export const Navigation = () => {
  const dispatch = useDispatch();
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();
  const { Carts } = useSelector((state) => state.cart);
  // State variable to track wheather menu should be sticky or not
  const [stickyClass, setStickyClass] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/all-product");
  };

  useEffect(() => {
    const handleScroll = () => {
      setStickyClass(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // logout
  const { user } = useSelector((state) => state.login);

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
    <>
      <Grid gutter="md" justify="space-around" align="stretch" m={"5px"}>
        <Grid.Col span={4}>
          <Group className={classes.Typo}>
            <Anchor
              href="#"
              target="_self"
              style={{ textDecoration: "none", color: "#7E7E7E" }}
            >
              About Us
            </Anchor>
            <Anchor
              href="#"
              target="_self"
              style={{ textDecoration: "none", color: "#7E7E7E" }}
            >
              My Account
            </Anchor>
            <Anchor
              href="#"
              target="_self"
              style={{ textDecoration: "none", color: "#7E7E7E" }}
            >
              Wishlist
            </Anchor>
            <Anchor
              href="#"
              target="_self"
              style={{ textDecoration: "none", color: "#7E7E7E" }}
            >
              Order Tracking
            </Anchor>
          </Group>
        </Grid.Col>
        <Grid.Col span={4}>
          <div className={classes.Typo}>
            <Text
              style={{
                color: "#80B82D",
                "&:hover": { color: "red", transform: "scale(1.05)" },
                cursor: "pointer",
              }}
            >
              100% Secure delivery without contacting the courier
            </Text>
          </div>
        </Grid.Col>
        <Grid.Col span={"content"}>
          <Group className={classes.Typo}>
            <Flex>
              <Text style={{ color: "#7E7E7E" }}>
                Need help? Call Us:{" "}
                <span style={{ color: "#80B82D" }}>+1800900122</span>
              </Text>
              <Group spacing={9} ml={15}>
                <Text>
                  English<span> ﹀</span>
                </Text>
                <Text>
                  INR<span> ﹀ </span>
                </Text>
              </Group>
            </Flex>
          </Group>
        </Grid.Col>
      </Grid>
      <Divider color="#F2F3F4" />

      <Grid
        gutter="lg"
        justify="space-between"
        align="center"
        h="111px"
        pp={"30px"}
        // m={"5px"}
        // grow
      >
        <Grid.Col span={2} lg={2}>
          <Anchor
            href="/"
            target="_self"
            className={classes.logo}
            style={{
              padding: "20px",
              textDecoration: "none",
              fontSize: "44px",
            }}
          >
            Logo
          </Anchor>
        </Grid.Col>
        {/* search functionality.... */}
        <Grid.Col span={5} lg={5}>
          <SearchHomeFilter />
        </Grid.Col>
        <Grid.Col span={2} lg={2}>
          <button
          onClick={handleClick}
            className={classes.vendor}
            style={{
              width: "112px",
              height: "40px",
              borderRadius: "5px",
              borderColor: "#F2F3F4",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
              border: "none",
            }}
          >
            <Group spacing={10} ml={10}>
              Shop Now <IconArrowNarrowRight color="#80B82D"  />
            </Group>
          </button>
        </Grid.Col>
      
        <Divider color="#F2F3F4" w={"100%"} />
      </Grid>

      <Paper
        style={{
          position: stickyClass ? "fixed" : "static",
          top: 0,
          zIndex: "9901",
          visibility: "visible",
          opacity: "1",
          width: "100%",

          height: "87px",
        }}
      >
        <Menus />
      </Paper>
      <Divider color="#F2F3F4" className={classes.menu} />
    </>
  );
};
{/* <Grid.Col span={3} lg={3}>
          <Group position="space-around">
            <Flex>
              <Text className={classes.Typo}>
                <Group spacing={6} ml={5}>
                  <IconRefresh color="#253D4E" />
                  Compare
                </Group>
              </Text>

              <Text className={classes.Typo}>
                <Group spacing={6} ml={5}>
                  <IconHeart color="#253D4E" />
                  Wishlist
                </Group>
              </Text>
              <Text className={classes.Typo} onClick={handleClick}>
                <Group spacing={6} ml={5}>
                  <Indicator
                    size={15}
                    label={Carts.totalQuantity}
                    color="#80B82D"
                    radius="xl"
                    position="Top-center"
                    ml={3}
                  >
                    <IconShoppingCart color="#253D4E" />
                  </Indicator>
               
                  Cart
                </Group>
              </Text>
              <Text className={classes.Typo} style={{ cursor: "pointer" }}>
                <Group spacing={6} ml={5}>
                  <IconUserCircle color="#253D4E" />
                
                  <Menu>
                    <Menu.Target>
                      <Text>Account</Text>
                    </Menu.Target>
                    <Menu.Dropdown style={{ padding: "15px" }}>
                      {user ? (
                        <Menu.Label onClick={notify}>
                          <Text
                            className="textDropdown"
                            onClick={onLogout}
                            style={{ cursor: "pointer" }}
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
                            >
                              Sign Up
                            </Text>
                          </Menu.Label>
                        </>
                      )}
                    </Menu.Dropdown>
                  </Menu>

               
                </Group>
              </Text>
            </Flex>
          </Group>
        
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />
        </Grid.Col> */}