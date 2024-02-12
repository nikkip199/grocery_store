import { Card, Group, Image, Text, createStyles } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
// category data map
const dropdownData = [
  {
    id: "1",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
    title: "Baking material",
  },
  {
    id: "2",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-3.png",
    title: "Clothing & beauty",
  },
  {
    id: "3",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-7.png",
    title: "Fresh Fruit",
  },
  {
    id: "4",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-6.png",
    title: "Milks and Dairies",
  },
  {
    id: "5",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
    title: "Vegetables",
  },
  {
    id: "6",

    title: "Bread and juice",
  },
  {
    id: "7",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
    title: "Deals of the Day",
  },
  {
    id: "8",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
    title: "Fresh Seafood",
  },
  {
    id: "9",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
    title: "Baking material",
  },
  {
    id: "10",
    url: "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png",
    title: "Wines & Drinks",
  },
];
const url =
  "https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/category-2.png";
// styles
const useStyles = createStyles((theme) => ({
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));

const Subcategory = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { subCategories } = useSelector((state) => state.subcategories);
  console.log(subCategories)
  return (
    <>
      {dropdownData.map((item) => (
        <Card
          p="sm"
          radius="md"
          className={classes.card}
          style={{
            backgroundColor: "#fff",
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          }}
          key={item.id}
        >
          <Group noWrap spacing={10}>
            <Image src={item.url} height="auto" width="20px" />
            {/* <Stack justify="space-around"> */}
            <Text
              style={{
                fontFamily: "Quicksand , sans-serif",

                fontSize: "16px",
                lineHeight: "19.2px",
                color: "#253D4E",
              }}
            >
              {item.title}
            </Text>
            {/* </Stack> */}
          </Group>
        </Card>
      ))}
    </>
  );
};

export default Subcategory;
