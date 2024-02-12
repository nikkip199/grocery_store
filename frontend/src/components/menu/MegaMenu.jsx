import {
  Menu,
  Button,
  Title,
  Text,
  Box,
  SimpleGrid,
  createStyles,
  Card,
  Anchor,
} from "@mantine/core";
import { banner14 } from "../../assets/imgImport";
// import { IconChevronDown } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";

const productStyleOne = [
  "Product Style One",
  "Product Style Two",
  "Product Style Three",
  "Product Style Four",
  "Product Load More",
  "Product Infinite Scrolling",
  "Shop Wide",
  "Shop With Left Sidebar",
  "Shop With Right Sidebar",
  "Shop List Left Sidebar",
];

const PSingleStyle = [
  "Product Style One",
  "Product Style Two",
  "Product Style Three",
  "Product Style Four",
];

const PSFeatures = [
  "Product With Deals Date",
  "Product With Message Box",
  "Product With Video Style One",
  "Product With video Style Two",
  "Product With Advertisement",
];

const ProductTypes = [
  "Single Product",
  "Grouped Product",
  "External/Affilate Product",
  "Variable Product",
  "Frequently Bought Together",
  "Product With No Sidebar",
  "Product With Left Sidebar",
];

const useStyles = createStyles(() => ({
  Heading: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "20px",
    marginBottom: "20px",
    lineHeight: "1.2",
    color: "#80B82D",
    fontWeight: "700",
    textAlign: "left",
    cursor: "pointer",
  },
  text: {
    fontFamily: "Lato, sans-serif",
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "12px",
    color: "#7E7E7E",
    marginBottom: "21px",
    // padding: "25px 15px",
    minWidth: "250px",
  },

  // image: {
  //   position: "absolute",
  //   marginBottom: "20px",
  //   backgroundSize: "cover",
  //   borderRadius: "10px",
  // width: "100%",
  // alignContent: "flex-start",
  // backgroundPosition: "center",
  // objectFit: "fill",
  // },

  child: {
    position: "absolute",
    top: 0,
    color: "white",
    display: "flex",
    flexDirection: "column",
    padding: "35px",
  },

  title1: {
    fontFamily: "Quicksand, sans-serif",
    color: "#253D4E",
    lineHeight: "48px",
    fontSize: "30px",

    width: "218px",
  },
  anch: {
    fontFamily: "Quicksand, sans-serif",
    fontSize: "18px",
    fontWeight: "120px",
    lineHeight: "20px",
    color: "#253D4E",
    "&:hover": {
      color: "#80B82D",
    },
  },
}));
export const MegaMenu = () => {
  const { classes } = useStyles();
  const [opened, { close, open }] = useDisclosure(false);

  return (
    // <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
    <Menu shadow='lg' position='bottom' withArrow opened={opened}>
      <Menu.Target>
        <Anchor
          onMouseEnter={open}
          onMouseLeave={close}
          href='#'
          target='_self'
          ml={"35px"}
          className={classes.anch}
          style={{
            
            textDecoration: "none",
          }}
        >
          Shop
        </Anchor>
      </Menu.Target>

      <Menu.Dropdown>
        <Card w={"100%"}>
          <SimpleGrid cols={4} spacing={20}>
            <Box>
              <Title className={classes.Heading}>Product Style</Title>
              {productStyleOne.map((item,index) => (
                <Text className={classes.text} key={index}>
                  {item}
                </Text>
              ))}
            </Box>
            <Box>
              <Title className={classes.Heading}>Product Single Style</Title>
              {PSingleStyle.map((item,index) => (
                <Text className={classes.text} key={index}>
                  {item}
                </Text>
              ))}
              <Box>
                <Title className={classes.Heading}>
                  Product Single Features
                </Title>
                {PSFeatures.map((item,index) => (
                  <Text className={classes.text} key={index}>
                    {item}
                  </Text>
                ))}
              </Box>
            </Box>
            <Box>
              <Title className={classes.Heading}>Product Type</Title>
              {ProductTypes.map((item,index) => (
                <Text className={classes.text} key={index}>
                  {item}
                </Text>
              ))}
            </Box>

            {/* card */}
            <div>
              <img
                src={banner14}
                style={{
                  height: "100%",
                  width: "30%",
                  objectFit: "cover",
                  position: "absolute",
                  marginBottom: "25px",
                  // backgroundSize: "cover",
                  borderRadius: "10px",
                }}
              />

              <div className={classes.child}>
                <Text className={classes.Heading}>Oganic</Text>
                <Title className={classes.title1}>
                  Everyday Fresh & Clean with Our Products
                </Title>

                <Button
                  variant='white'
                  // icon={<IconArrowNarrowRight />}
                  style={{
                    backgroundColor: "#80B82D",
                    color: "#FFFFFF",
                    width: "115px",
                    height: "30px",
                    borderRadius: "4px",
                  }}
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </SimpleGrid>
        </Card>
      </Menu.Dropdown>
    </Menu>
  );
};
