import {
  createStyles,
  Text,
  Grid,
  // ActionIcon,
  Group,
  rem,
  Title,
  Anchor,
  Stack,
  Flex,
  Box,
} from "@mantine/core";
import { IconHeadphones } from "@tabler/icons-react";
import { IconSend } from "@tabler/icons-react";
import { IconClockHour1 } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { IconPhoneCall } from "@tabler/icons-react";
import { appStore } from "../../assets/imgImport";
import { googlePlay } from "../../assets/imgImport";
import { paymentMethod } from "../../assets/imgImport";
import { facebookFooter } from "../../assets/imgImport";
import { instaFooter } from "../../assets/imgImport";
import { twitterFooter } from "../../assets/imgImport";
import { pinterestFooter } from "../../assets/imgImport";
import { youtubeFooter } from "../../assets/imgImport";

const FOOT_LINKS_Col1 = [
  { id: 1, label: "About Us", title: "Company", link: "#" },
  { id: 2, label: "Delivery Information", link: "#" },
  { id: 3, label: "Privacy Policy", link: "#" },
  { id: 4, label: "Terms & Conditions", link: "#" },
  { id: 5, label: "Contact Us", link: "#" },
  // { id: 6, label: "Support Center", link: "#" },
  { id: 7, label: "Careers", link: "#" },
];
const FOOT_LINKS_Col2 = [
  { id: 1, label: "Sign In", title: "Account", link: "#" },
  { id: 2, label: "View Cart", link: "#" },
  { id: 3, label: "My Wishlist", link: "#" },
  { id: 4, label: "Track My Order", link: "#" },
  // { id: 5, label: "Help Ticket", link: "#" },
  // { id: 6, label: "Shipping Details", link: "#" },
  // { id: 7, label: "Compare products", link: "#" },
];
const FOOT_LINKS_Col3 = [
  { id: 1, label: "Become a Vendor", title: "Corporate", link: "#" },
  { id: 2, label: "Affiliate Program", link: "#" },
  { id: 3, label: "Farm Business", link: "#" },
  { id: 4, label: "Farm Careers", link: "#" },
  { id: 5, label: "Our Suppliers", link: "#" },
  { id: 6, label: "Accessibility", link: "#" },
  { id: 7, label: "Promotions", link: "#" },
];
const FOOT_LINKS_Col4 = [
  { id: 1, label: "Milk & Flavoured Milk", title: "Popular", link: "#" },
  { id: 2, label: "Butter and Margarine", link: "#" },
  { id: 3, label: "Eggs Substitutes", link: "#" },
  { id: 4, label: "Marmalades", link: "#" },
  { id: 5, label: "Sour Cream and Dips", link: "#" },
  { id: 6, label: "Tea & Kombucha", link: "#" },
  { id: 7, label: "Cheese", link: "#" },
];

const useStyles = createStyles((theme) => ({
  logo: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "55px",
    lineHeight: "68.75px",
    width: "132px",
    color: "#253D4E",
  },
  title: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "24px",

    color: "#253D4E",
    // display: 'flex',
    flexWrap: "wrap",
    // marginTop: "5px",
  },
  description: {
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    // lineHeight: "24px",
    color: "#253D4E",
    // width: "146px",
    // display: 'flex',
    // flexWrap:'wrap'
  },
  Footer: {
    display: "flex",
    margin: "30px",
    // justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
  inner: {
    display: "flex",
    flexWrap: "wrap",

    // flexDirection:'row',
    justify: "space-around",
  },
  num: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "26px",
    lineHeight: "26px",
    color: "#80B82D",
  },
  numSub: {
    fontFamily: "Lato, sans-serif",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "12px",
    color: "#7E7E7E",
  },
  inside: {
    display: "flex",
    justify: "space-evenly",
    alignItems: "center",
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
    [theme.fn.smallerThan("sm")]: {
      display: "flex",

      flexDirection: "column",
      alignItems: "center",
    },
    [theme.fn.smallerThan("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  none: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  anchor: {
    fontFamily: "Lato, sans-serif",
    fontSize: "15px",
    // lineHeight: "24px",
    color: "#253D4E",
    "&:hover": {
      color: "green",
      textDecoration: "none",
    },
    alignItems: "center",
  },
  [theme.fn.smallerThan("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.fn.smallerThan("xs")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Footer = () => {
  const { classes } = useStyles();

  return (
    <>
      <footer color="#F5F5F5">
        <Grid gutter={3} className={classes.inner}>
          <Grid.Col md={10} sm={12} xs={12} lg={3}>
            <Box style={{ marginLeft: "15px" }}>
              <Stack spacing="lg">
                <Anchor
                  href="/"
                  target="_self"
                  className={classes.logo}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Logo
                </Anchor>

                <Text className={classes.description}>
                  Lorem ipsum dolor sit amet consectetur. Suspendisse quis.
                </Text>
                <Box>
                  <Text className={classes.description} mt={"5px"}>
                    <IconMapPin size={"1rem"} color="#80B82D" />
                    Address: 5171 W Campbell Ave undefined Kent, Utah 53127
                    United States
                  </Text>
                  <Text className={classes.description}>
                    <IconHeadphones size={"1rem"} color="#80B82D" /> Call Us:
                    (+91) - 540-025-124553
                  </Text>
                  <Text className={classes.description}>
                    {" "}
                    <IconSend size={"1rem"} color="#80B82D" /> Email:
                    sale@Name.com
                  </Text>
                  <Text className={classes.description}>
                    {" "}
                    <IconClockHour1 size={"1rem"} color="#80B82D" /> Working
                    Hours: 10:00 - 18:00, Mon - Sat
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Grid.Col>
          <Grid.Col lg={6}>
            <Box style={{ marginLeft: "25px" }}>
              <Grid gutter={30}>
                <Grid.Col lg={6} md={6} sm={6} xs={12}>
                  <Box>
                    {FOOT_LINKS_Col1.map((link) => (
                      <Stack key={link.id}>
                        <Title className={classes.title}>{link.title}</Title>

                        <Anchor href={link.link} target="_self"  style={
                              {
                                top: "26.31px",
                                left: "50px",
                                textDecoration: "none",
                              }
                            }>
                          <Text className={classes.anchor}>{link.label}</Text>
                        </Anchor>
                      </Stack>
                    ))}
                  </Box>
                </Grid.Col>
                <Grid.Col lg={6} md={6} sm={6} xs={12}>
                  <Box>
                    {FOOT_LINKS_Col2.map((link) => (
                      <Stack key={link.id}>
                        <div>
                          <Title className={classes.title}>{link.title}</Title>
                        </div>

                        <div>
                          <Anchor
                            href={link.link}
                            target="_self"
                            style={
                              {
                                top: "26.31px",
                                left: "50px",
                                textDecoration: "none",
                              }
                            }
                          >
                            <Text className={classes.anchor}>{link.label}</Text>
                          </Anchor>
                        </div>
                      </Stack>
                    ))}
                  </Box>
                </Grid.Col>
                {/* <Grid.Col lg={3} md={6} sm={6} xs={12}>
                  <Box>
                    {FOOT_LINKS_Col3.map((link) => (
                      <Stack key={link.id}>
                        <div>
                          <Title className={classes.title}>{link.title}</Title>
                        </div>

                        <div>
                          <Anchor
                            href={link.link}
                            target="_self"
                            style={
                              {
                                top: "26.31px",
                                left: "50px",
                                textDecoration: "none",
                              }
                            }
                          >
                            <Text className={classes.anchor}>{link.label}</Text>
                          </Anchor>
                        </div>
                      </Stack>
                    ))}
                  </Box>
                </Grid.Col>
                <Grid.Col lg={3} md={6} sm={6} xs={12}>
                  <Box>
                    {FOOT_LINKS_Col4.map((link) => (
                      <Stack key={link.id}>
                        <div>
                          <Title className={classes.title}>{link.title}</Title>
                        </div>

                        <div>
                          <Anchor
                            href={link.link}
                            target="_self"
                            style={
                              {
                                top: "26.31px",
                                left: "50px",
                                textDecoration: "none",
                              }
                            }
                          >
                            <Text
                              className={classes.anchor}

                              // style={{color: isHovered==i ? '#80B82D' :   '#253D4E'}}
                            >
                              {link.label}
                            </Text>
                          </Anchor>
                        </div>
                      </Stack>
                    ))}
                  </Box>
                </Grid.Col> */}
              </Grid>
            </Box>
          </Grid.Col>
          <Grid.Col md={12} sm={12} xs={12} lg={3}>
            <Box style={{ marginLeft: "36px" }}>
              <div>
                <Title className={classes.title}>Install App</Title>
              </div>
              <div>
                <Text className={classes.description}>
                  From App Store or Google Play
                </Text>

                <Group spacing={2} style={{ flexDirection: "row" }}>
                  <img
                    srcSet={googlePlay}
                    style={{
                      width: "122px",
                      borderRadius: "5px",
                      height: "41px",
                    }}
                  />
                  <img
                    srcSet={appStore}
                    style={{
                      width: "122px",
                      borderRadius: "5px",
                      height: "41px",
                    }}
                  />
                </Group>

                <Text className={classes.description}>
                  Secured Payment Gateways
                </Text>
                <img srcSet={paymentMethod} style={{ minWidth: "224px" }} />
              </div>
            </Box>
          </Grid.Col>
        </Grid>

        {/* Second footer section */}
        <div className={classes.Footer}>
          <div className={classes.inside}>
            <Grid>
              <Grid.Col lg={3}>
                <Text
                  style={{
                    fontFamily: "Lato, sans-serif",
                    fontSize: "15px",
                    lineHeight: "28px",
                    color: "#7E7E7E",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur. Nunc. <br /> All
                  rights reserved
                </Text>
              </Grid.Col>

              <Grid.Col lg={2} className={classes.none}>
                <Group spacing={6}>
                  <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    ml={50}
                  >
                    <IconPhoneCall
                      style={{
                        color: "#C1C1C1",
                        width: "30px",
                        height: "31px",
                      }}
                    />

                    <div>
                      <Text className={classes.num}>1900646666</Text>
                      <Text className={classes.numSub}>
                        Working 8:00 - 22:00
                      </Text>
                    </div>
                  </Flex>
                </Group>
              </Grid.Col>

              <Grid.Col lg={2} className={classes.none}>
                <Group spacing={9}>
                  <Flex
                    mih={50}
                    gap="md"
                    justify="flex-start"
                    align="flex-start"
                    direction="row"
                    ml={70}
                  >
                    <IconPhoneCall
                      style={{
                        color: "#C1C1C1",
                        width: "30px",
                        height: "31px",
                      }}
                    />

                    <div>
                      <Text className={classes.num}>1900648888</Text>
                      <Text className={classes.numSub}>
                        24/7 Support Center
                      </Text>
                    </div>
                  </Flex>
                </Group>
              </Grid.Col>
              <Grid.Col lg={2}>
                <Group spacing={9}>
                  <Flex
                    gap="12px"
                    // justify='flex-start'
                    // align='flex-start'
                    direction="column"
                    ml={250}
                  >
                    <Flex direction="row">
                      <Text
                        style={{
                          fontFamily: "Quicksand, sans-serif",
                          lineHeight: "19.2px",
                          color: "#253D4E",
                          fontSize: "16px",
                        }}
                      >
                        Follow Us
                      </Text>

                      <Group ml={8}>
                        <Flex gap={1}>
                          <img
                            srcSet={facebookFooter}
                            alt="facebook"
                            style={{ width: "34px", height: "34px" }}
                          />
                          <img
                            srcSet={twitterFooter}
                            alt="facebook"
                            style={{ width: "34px", height: "34px" }}
                          />
                          <img
                            srcSet={instaFooter}
                            alt="facebook"
                            style={{ width: "34px", height: "34px" }}
                          />
                          <img
                            srcSet={pinterestFooter}
                            alt="facebook"
                            style={{ width: "34px", height: "34px" }}
                          />
                          <img
                            srcSet={youtubeFooter}
                            alt="facebook"
                            style={{ width: "34px", height: "34px" }}
                          />
                        </Flex>
                      </Group>
                    </Flex>
                    <div>
                      <Text
                        style={{
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "400",
                          fontSize: "12px",
                          // lineHeight: "24px",
                          color: "#7E7E7E",
                        }}
                      >
                        Up to 15% discount on your first subscribe
                      </Text>
                    </div>
                  </Flex>
                </Group>
              </Grid.Col>
            </Grid>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
