import {
  Paper,
  Grid,
  Badge,
  Text,
  Button,
  Menu,
  createStyles,
  Group,
  Box,
  SimpleGrid,
  Card,
  Title,
  Progress,
  Slider,
  Stack,
  Rating,
  Image,
  Loader,
} from "@mantine/core";

import { IconFilter } from "@tabler/icons-react";
import { IconGridDots } from "@tabler/icons-react";

import { IconList } from "@tabler/icons-react";
import ButtonDropCategory from "./ButtonDropCategory";
import { useState, useEffect } from "react";
import CheckboxCard from "./CheckboxCard";

import {
  product01_1,
  product02_1,
  product03_1,
  product04_1,
  product05_1,
  product06_1,
  product07_1,
  product08_1,
  product13_1,
} from "../../../assets/imgImport";

import { useDispatch, useSelector } from "react-redux";
import FilterProductCard from "../../../components/Product/FilterProductCard";
import { getAllCategories } from "../../../features/category/categorySlice";

// import {
//   getAllProducts,
//   setProducts,
// } from "../../../features/product/productSlice";
// const productCategories = [
//   {
//     id: "1",
//     title: "Baking material",
//   },
//   {
//     id: "2",
//     title: "Clothing & beauty",
//   },
//   {
//     id: "3",
//     title: "Fresh Fruit",
//   },
//   {
//     id: "4",
//     title: "Milks and Dairies",
//   },
//   {
//     id: "5",
//     title: "Vegetables",
//   },
//   {
//     id: "6",
//     title: "Bread and juice",
//   },
//   {
//     id: "7",
//     title: "Deals of the Day",
//   },
//   {
//     id: "8",
//     title: "Fresh Seafood",
//   },
//   {
//     id: "9",
//     title: "Baking material",
//   },
//   {
//     id: "10",
//     title: "Wines & Drinks",
//   },
// ];

const brands = [
  { id: "1", title: "100% Organic (3)" },
  { id: "2", title: "Bio Market (3)" },
  { id: "3", title: "Eco Marker (3)" },
  { id: "4", title: "Family (2)" },
  { id: "6", title: "Farmers Market (5)" },
  { id: "7", title: "Green Basket (2)" },
  { id: "8", title: "Health Store (4)" },
  { id: "9", title: "Shop Grocery (3)" },
  { id: "10", title: "The Green (3)" },
  { id: "11", title: "Vegan Market (3)" },
];
const categ = [
  { id: "1", title: "Peach" },
  { id: "2", title: "Read Apple" },
  { id: "3", title: "Snacks" },
  { id: "4", title: "Fresh Fruits" },
  { id: "6", title: "Vegetables" },
  { id: "7", title: "Strawberry" },
  { id: "8", title: "Black Plum" },
  { id: "9", title: "Custurd Apple" },
  { id: "10", title: "Coffee & Tea" },
  { id: "11", title: "Milk and Cake " },
];

const filterByAttribute = [
  { id: "1", title: "10(2)" },
  { id: "2", title: "5(2)" },
  { id: "3", title: "6(2)" },
  { id: "4", title: "7(2)" },
  { id: "5", title: "8(1)" },
  { id: "6", title: "9(10" },
];

const filterByAttributeTwo = [
  { id: "1", title: "100g(2)" },
  { id: "2", title: "50g(2)" },
  { id: "3", title: "60g(2)" },
  { id: "4", title: "70g(2)" },
  { id: "5", title: "80g(1)" },
  { id: "6", title: "90g(10)" },
];

const DefaultSort = [
  { id: "1", title: "Sort by popularity" },
  { id: "2", title: "Sort by average rating" },
  { id: "3", title: "Sort by latest" },
  { id: "4", title: "Sort by price:low to high" },
  { id: "5", title: "Sort by price:high to low" },
];

const show = [
  { id: "1", title: "12" },
  { id: "2", title: "24" },
  { id: "3", title: "36" },
  { id: "4", title: "48" },
  { id: "5", title: "60" },
  { id: "6", title: "72" },
];

// filterProductDropdown end here.....

const productArray = [
  {
    id: 1,
    productImg: product01_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 2,
    productImg: product02_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 3,
    productImg: product03_1,

    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 4,
    productImg: product04_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 5,
    productImg: product05_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 6,
    productImg: product06_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 7,
    productImg: product07_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 8,
    productImg: product08_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
  {
    id: 9,
    productImg: product13_1,
    // backImg: product01_2,
    title: "Fresh Fruit",
    name: "Seeds of Change Organic Red Rice",
    desc: "Food",
    discountPrice: "$28.85",
    originalPrice: "$32.00",
  },
];

const useStyles = createStyles(() => ({
  main: {
    width: "70%",
    padding: "80px 15px 50px",
    paddingRight: "45px",
  },
  badge: {
    fontSize: "16px",
    padding: " 9px 23px ",
    color: "#253d4e",
    textAlign: "center",
    lineHeight: "24px",
    backgroundColor: "#fff",
    fontFamily: "Quicksand, sans-serif",
    borderColor: "#ececec",
  },
}));

export const FilterProductDetailPage = () => {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);
  const dispatch = useDispatch();
  const { classes } = useStyles();
  const { productBySubcategory, isLoading } = useSelector(
    (state) => state.subcategories
  );
  const { categories } = useSelector((state) => state.categories);
  console.log(productBySubcategory);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  // slider
  console.log(categories);
  const Url = import.meta.env.VITE_REACT_PRODUCT_IMAGE_URL;
  return (
    <Grid>
      <Grid.Col span={8}>
        <SimpleGrid
          cols={2}
          style={{ display: "flex", justify: "space-between" }}
        >
          <Box
            style={{
              display: "flex",
              justify: "flex-start",
              alignItems: "center",
            }}
          >
            <Badge className={classes.badge} variant="outline" size="xl">
              <Group spacing={1} p={5}>
                <IconFilter style={{ color: "#253d4e" }} />
                Filter by Subcategory
              </Group>
            </Badge>
            <Badge
              ml={18}
              styles={{ cursor: "pointer" }}
              size="xl"
              bg="#80B82D"
              radius="md"
            >
              <IconGridDots color="#fff" style={{ marginTop: "8px" }} />
            </Badge>
            <Badge
              style={{ cursor: "pointer", marginLeft: "5px" }}
              bg="#def9ec"
              size="xl"
              radius="md"
            >
              <IconList color="#7e7e7e" style={{ marginTop: "7px" }} />
            </Badge>
            {/* <Group>
              <Text
                style={{
                  fontFamily: "Lato,sans-serif",
                  color: "#7e7e7e",
                  marginLeft: "20px",
                }}
              >
                Show:{" "}
              </Text>
            
              <ButtonDropCategory category={show} title={"12"} />
           
            </Group> */}
          </Box>
          <Box>
            <Menu>
              {/* <Group>
                <Text
                  style={{
                    fontFamily: "Lato,sans-serif",
                    fontSize: "16px",
                    color: "#7e7e7e",
                  }}
                >
                  Showing all 8 results
                </Text>
              
                <Box>
                  <ButtonDropCategory
                    category={DefaultSort}
                    title={"Default sorting"}
                  />
                </Box>
              
              </Group> */}
            </Menu>
          </Box>
        </SimpleGrid>
        <Box style={{ marginTop: "20px" }}>
          {/* custom component using... */}
          {/* <ButtonDropCategory
            category={categories.data}
            title={"All Categories"}
          />
          <ButtonDropCategory category={brands} title={"All Brands"} />
          <ButtonDropCategory category={filterByAttribute} title={"All Size"} />
          <ButtonDropCategory
            category={filterByAttributeTwo}
            title={"All Weight"}
          /> */}

          {/*end here...... */}

          {/* <Button
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              color: "#fff",
            }}
            bg="#80B82D"
            radius="md"
            variant="#29a56c"
          >
            Filter By Subcategory
          </Button>
          <Button
            style={{
              cursor: "pointer",
              marginLeft: "10px",
              color: "#253d4e",
              borderColor: "#7e7e7e",
            }}
            bg="#fff"
            variant="outline"
            radius="md"
            // onClick={}
          >
            Reset Filters
          </Button> */}
        </Box>
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
            {productBySubcategory.map((filterItem) => (
              <>
                {filterItem.products.length != 0 ? (
                  <FilterProductCard Items={filterItem.products} />
                ) : (
                  <>
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
                      <Text
                        c="red"
                        sx={{
                          fontFamily: "Lato, sans-serif",
                          fontSize: "18px",
                          fontWeight: "16px",
                          margin: "auto",
                        }}
                      >
                        Sorry !!! Product not found
                      </Text>
                    </Card>
                  </>
                )}
              </>
            ))}
          </>
        )}
        {/* end here... */}
      </Grid.Col>
      <Box></Box>

      <Grid.Col span={3}>
        <Card
          style={{
            boxShadow:
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
            padding: "25px",
          }}
        >
          <Title
            style={{
              fontFamily: "",
              fontSize: "24px",

              color: "#253D4E",
            }}
          >
            Filter by price
          </Title>
          <Progress color="#80B82D" value={20} mt={"15px"} size={"xs"} />
          <Slider
            color="green"
            value={value}
            onChange={setValue}
            onChangeEnd={setEndValue}
            mt={"30px"}
          />
          <Group>
            <Group spacing={110} mt={30} p={15}>
              <Paper
                withBorder
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                  padding: "10px",
                }}
              >
                <Text>${endValue}</Text>
              </Paper>
              <Paper
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
                  padding: "10px",
                }}
              >
                <Text>${value}</Text>
              </Paper>
            </Group>
          </Group>
        </Card>

        {/* importing custom components... */}
        <CheckboxCard checkboxCategory={categ} Tag={"Product Categories"} />
        <CheckboxCard checkboxCategory={brands} Tag={"Brands"} />
        <CheckboxCard
          checkboxCategory={filterByAttribute}
          Tag={"Filter by attribute"}
        />
        <CheckboxCard
          checkboxCategory={filterByAttributeTwo}
          Tag={"Filter by attribute"}
        />

        {/* change...custom component uses now */}
        {/* <CheckboxCard
            checkboxCategory={filterByStock}
            Tag={"Filter by stock status"}
          /> */}

        {/* filter by rating */}
        {/* <Card
            mt={15}
            style={{
              boxShadow:
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              padding: "25px",
            }}
          >
            <Title
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontSize: "24px",

                color: "#253D4E",
              }}
            >
              Filter by rating{" "}
            </Title>
            <Divider />

            <Group spacing={15} mt={6}>
              <Checkbox color='green' p={7} />
              <Rating defaultValue={5} size='xs' color='teal' />
            </Group>
            <Group spacing={15} mt={6}>
              <Checkbox p={7} />
              <Rating defaultValue={3} size='xs' color='teal' />
            </Group>
            <Group spacing={15} mt={6}>
              <Checkbox p={7} />
              <Rating size='xs' color='teal' />
            </Group>
          </Card> */}
      </Grid.Col>
    </Grid>
    // </motion.Box>
  );
};
