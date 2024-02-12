import { useEffect } from "react";
import { Grid, Paper } from "@mantine/core";
import BannerDetail from "../components/Banner/BannerDetail";
import PopularProduct from "../components/Product/PopularProduct";
import ProductGallery from "../components/Slider/ProductCategory";
import { CarouselOne } from "../components/carousel/CarouselOne";
import { TopSellingProduct } from "./Product/sellingProduct/TopSellingProduct";
import { TimeCard } from "./Product/timingCard/TimeCard";
import FilterProductCard from "../components/Product/FilterProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProductByCategories } from "../features/category/categorySlice";
import CtegoryDetail from "./CtegoryDetail";
const Home = () => {
  return (
    <>
      {/* CarouselOne start */}
      <Grid mt={10}>
        <CarouselOne />
      </Grid>
      {/* CarouselOne start */}

      {/* product gallery start */}
      <Paper>
        <ProductGallery />
      </Paper>
      {/* product gallery start */}

      {/* banner details start */}
      <Grid
        gutter={8}
        style={{
          borderRadius: "15px",
          // margin: "20px",
        }}
      >
        <BannerDetail />
      </Grid>
      {/* banner details end */}

      {/* product gallery start */}
      <Paper
        style={{
          borderRadius: "15px",
          marginBottom: "20px",
        }}
      >
        <PopularProduct />
      </Paper>
      {/* time card  start */}
      <div
        style={{
          borderRadius: "15px",
          // margin: "20px",
        }}
      >
        <TimeCard />
      </div>
      {/* time card end here */}

      {/* top selling card  start */}
      <div
        style={{
          borderRadius: "15px",
          // margin: "20px",
        }}
      >
        <TopSellingProduct />
      </div>
    </>
  );
};

export default Home;
