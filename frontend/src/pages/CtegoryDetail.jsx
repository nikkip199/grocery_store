import React from "react";
import FilterProductCard from "../components/Product/FilterProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategories } from "../features/category/categorySlice";
import { useParams } from "react-router-dom";
import { Text, Card,Loader } from "@mantine/core";

// import { getProductByCategories } from "../../features/category/categorySlice";

function CtegoryDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);
  const { productByCategory, isLoading } = useSelector(
    (state) => state.categories
  );
  console.log(productByCategory);
  useEffect(() => {
    dispatch(getProductByCategories(id));
  }, [dispatch]);
  return (
    <>
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
          {productByCategory !== null ? (
            <div>
              <FilterProductCard Items={productByCategory} />
            </div>
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
      )}
    </>
  );
}

export default CtegoryDetail;
