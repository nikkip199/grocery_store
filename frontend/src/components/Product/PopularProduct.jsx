import PopularProductCard from "./PopularProductCard";

import Heading from "../common/Heading";
// import { useGetAllProduct } from "../../hooks/products/useGetAllProduct";
// const ProductImageUrl = import.meta.env.REACT_APP_PRODUCT_IMAGE_URL;
// import { useParams } from "react-router-dom";

const HEADER_LINKS = [
  {
    id: "1",
    link: "",
    label: "All",
  },
  {
    id: "2",
    link: "",
    label: "Baking Materials",
  },
  {
    id: "3",
    link: "",
    label: "Fresh Fruits",
  },
  {
    id: "4",
    link: "",
    label: "Meats",
  },
  {
    id: "5",
    link: "",
    label: "Milk & Dairies",
  },
  {
    id: "6",
    link: "",
    label: "Vegetables",
  },
];



function PopularProduct() {
  // const { id } = useParams();
  // const { isLoading, data } = useGetAllProduct();

  // console.log("dadada", data?.data);
  return (
    <>
      <Heading heading={"Popular Products"} links={HEADER_LINKS} />
      {/* <PopularProductCard isLink={"yes"} Items={data?.data} /> */}
      <PopularProductCard isLink={"yes"} />
    </>
  );
}

export default PopularProduct;
