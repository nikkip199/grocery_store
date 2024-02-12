import {
  Menu,
  Text,
  Group,
  Flex,
  Image,
  Card,
  createStyles,
  SimpleGrid,
  Button,
  Loader,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { IconCategory } from "@tabler/icons-react";
import { IconFlame } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// import Subcategory from "./Subcategory";
import {
  getAllSubCategories,
  getProductBySubCategories,
} from "../../features/subcategory/subcategorySlice";
import { useEffect } from "react";

// const dropdownData = [
//   {
//     id: "1",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
//     title: "Baking material",
//   },
//   {
//     id: "2",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-3.png",
//     title: "Clothing & beauty",
//   },
//   {
//     id: "3",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-7.png",
//     title: "Fresh Fruit",
//   },
//   {
//     id: "4",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-6.png",
//     title: "Milks and Dairies",
//   },
//   {
//     id: "5",
//
//     title: "Vegetables",
//   },
//   {
//     id: "6",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
//     title: "Bread and juice",
//   },
//   {
//     id: "7",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
//     title: "Deals of the Day",
//   },
//   {
//     id: "8",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
//     title: "Fresh Seafood",
//   },
//   {
//     id: "9",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
//     title: "Baking material",
//   },
//   {
//     id: "10",
//     url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
//     title: "Wines & Drinks",
//   },
// ];

const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
  hot: {
    "&:hover": {
      transform: "scale(1.05)",
      // textDecoration: "none",
      color: "#80B82D",
    },
  },
}));
const url =
  "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png";
export const SubcategoryDropdown = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(()=>{dispatch(getAllSubCategories())},[dispatch])
  const { subCategories ,isLoading} = useSelector((state) => state.subcategories);
  console.log(subCategories);
  return (
    <Menu>
      <Menu.Target>
        <Group position="center">
          <Flex
            mih={50}
            gap="md"
            justify="flex-end"
            align="center"
            direction="row"
            wrap="wrap"
          >
            <button
              style={{
                width: "260px",
                height: "38px",
                backgroundColor: "#80B82D",
                // marginRight: "15",
                border: "none",
                color: "white",
                fontFamily: "Quicksand, sans-serif",
                fontSize: "16px",
                lineHeight: "20px",
                marginLeft: "5px",
                cursor: "pointer",
                borderRadius: "6px",
              }}
              onClick={() => {
                dispatch(getAllSubCategories());
              }}
            >
              <Group position={"center"}>
                <IconCategory />
                <Text
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "15px",
                    lineHeight: "20px",
                    color: "#ffff",
                  }}
                >
                  Browse All Categories
                </Text>
                <IconChevronDown />
              </Group>
            </button>
            {/* <Group position="center">
              <Flex
                mih={50}
                gap="md"
                justify="flex-end"
                align="center"
                direction="row"
                wrap="wrap"
              >
                <IconFlame color="#80B82D" />
                <Text
                  style={{
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "18px",
                    lineHeight: "20px",
                    color: "#253D4E",
                  }}
                  className={classes.hot}
                  onClick={() => {
                    navigate("/all-product");
                  }}
                >
                  Hot Deals
                </Text>
              </Flex>
            </Group> */}
          </Flex>
        </Group>
      </Menu.Target>
      <Menu.Dropdown style={{ backgroundColor: "#fff" }}>
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm" p={5}>
          {isLoading ? (
            <Loader
              variant="dots"
              // size="lg"
              color="green"
              // pos="center"
              m="auto"
            />
          ) : (
            <>
              {subCategories?.subcategory?.map((item) => (
                <Card
                  padding="10px"
                  radius="md"
                  className={classes.card}
                  style={{ backgroundColor: "#fff", cursor: "pointer" }}
                  key={item.id}
                >
                  <Group noWrap spacing={10}>
                    <Image src={url} height="auto" width="30px" />
                    {/* <Stack justify="space-around"> */}
                    {/* Routing link */}
                    <Text
                      component={Link}
                      to={`filter-page/${item.id}`}
                      onClick={() => {
                        dispatch(getProductBySubCategories(item.id));
                      }}
                      style={{
                        fontFamily: "Quicksand , sans-serif",
                        fontSize: "16px",
                        lineHeight: "19.2px",
                        color: "#253D4E",
                        marginTop: "xs",
                      }}
                    >
                      {item.subcategory}
                    </Text>

                    {/* </Stack> */}
                  </Group>
                </Card>
              ))}
            </>
          )}
        </SimpleGrid>
      </Menu.Dropdown>
    </Menu>
  );
};
