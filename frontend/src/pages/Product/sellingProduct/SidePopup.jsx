import { Card, Text, Group, Image, Stack, Rating } from "@mantine/core";
import {
  product01_1,
  // product02_1,
  // product03_1,
} from "../../../assets/imgImport";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { CloseButton } from "react-toastify/dist/components";

const TopSelling = [
  {
    image: product01_1,
    title: "Seeds of Change Organic Red Rice",
    price: "$28.85",
    priceTag: "$32.80",
  },
  // {
  //   image: product03_1,
  //   title: "Angie’s Sweet & Salty Kettle Corn",
  //   price: "$28.85",
  //   priceTag: "$32.80",
  // },
  // {
  //   image: product02_1,
  //   title: "All Natural Style Chicken Meatballs",
  //   price: "$28.85",
  //   priceTag: "$32.80",
  // },
];

// eslint-disable-next-line react/prop-types
const SidePopup = ({ onClose }) => {
  return (
    <Card onClose={onClose}>
      {TopSelling.map((product,index) => (
        <Card padding='5px' radius='md' key={index}>
          <Group noWrap>
            <Image src={product.image} height='95px' width='95px' />
            <Stack justify='space-around'>
              <Text
                style={{
                  fontFamily: "Quicksand , sans-serif",

                  fontSize: "16px",
                  lineHeight: "19.2px",
                  marginTop: "xs",

                  color: "#253D4E",
                  "&:hover": {
                    transform: "scale(1.05)",
                    textDecoration: "none",
                    color: "#80B82D",
                  },
                }}
              >
                {product.title}
              </Text>
              <Rating defaultValue={2} color='#ADADAD' size='xs' count={6} />
              <Group noWrap spacing='xs'>
                <Text
                  style={{
                    fontFamily: "Quicksand , sans-serif",

                    fontSize: "18px",
                    lineHeight: "19.2px",
                    color: "#253D4E",
                  }}
                >
                  {product.price}
                </Text>
                <Text
                  style={{
                    fontFamily: "Quicksand , sans-serif",

                    fontSize: "14px",
                    lineHeight: "18px",
                    color: "#C1C1C1",
                  }}
                >
                  {product.priceTag}
                </Text>
              </Group>
            </Stack>
          </Group>
        </Card>
      ))}
    </Card>
  );
};

export default SidePopup;
