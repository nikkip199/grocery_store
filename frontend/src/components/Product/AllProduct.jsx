import React from "react";
import { Card, Loader, Text } from "@mantine/core";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../features/product/productSlice";
import { Pagination } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
// import PopularProductCard from './PopularProductCard'

function AllProduct() {
  const [activePage, setPage] = useState(1);
  console.log(activePage);
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  console.log(products);
  useEffect(() => {
    dispatch(getAllProducts(activePage));
  }, [dispatch, activePage]);

  //  send props in product card
  return (
    <div>
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
          {products.totalPages === null || activePage > products.totalPages ? (
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
                Sorry !!! Page Not Found
              </Text>
            </Card>
          ) : (
            <>
              <ProductCard Items={products.products} />
              <Pagination
                mt={20}
                value={activePage}
                onChange={setPage}
                total={products.totalPages}
                position="center"
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default AllProduct;
