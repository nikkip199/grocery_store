import {
  Card,
  Title,
  Progress,
  Checkbox,
  Text,
  Group,
  Button,
} from "@mantine/core";
import { useState, useEffect } from "react";
// eslint-disable-next-line react/prop-types
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../../features/category/categorySlice";
const CheckboxCard = ({ checkboxCategory, Tag }) => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <Card
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
        {Tag || "tag"}
      </Title>
      <Progress color="#80B82D" value={60} mt={"15px"} size={"xs"} />
      {checkboxCategory.map((category) => (
        <Group key={category.id} spacing={15} mt={6}>
          <Checkbox color="green" p={7} />
          <Text
            style={{
              fontFamily: "Lato,sans-serif",
              fontSize: "13.25px",
              color: "#7e7e7e",
            }}
          >
            {category.title || category.name}
          </Text>
        </Group>
      ))}
      <Button
        mt={7}
        style={{
          cursor: "pointer",
          marginLeft: "10px",
          color: "#fff",
        }}
        bg="#80B82D"
        radius="md"
        variant="#29a56c"
      >
        Reset
      </Button>
    </Card>
  );
};

export default CheckboxCard;
