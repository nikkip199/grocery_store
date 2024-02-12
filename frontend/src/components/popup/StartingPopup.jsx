import {
  BackgroundImage,
  Box,
  Text,
  createStyles,
  Title,
  Container,
  Rating,
  Button,
  Modal,
} from "@mantine/core";
import { popup } from "../../assets/imgImport";
import { CountDown } from "../../pages/Product/timingCard/CountDown";
// import { useEffect, useState } from "react";

const useStyles = createStyles(() => ({
  main: {
    // borderRadius: "20px",
    // padding: "40px",
  },
  img: {
    // position: "relative",
    // overflow: "hidden",
    height: "500px",
    width: "100%",
    // padding: "5px",
    // border: "1px solid red",

    // textAlign: "left",
  },
  para1: {
    position: "absolute",
    fontFamily: "Quicksand, sans-serif",
    fontSize: "19px",
    color: "#fdc040",
    // lineHeight: "1px",
    // marginTop: "10px",
  },
  title: {
    fontFamily: "Quicksand, sans-serif",
    color: "#253D4E",
    lineHeight: "48px",
    fontSize: "40px",
    position: "absolute",
    marginTop: "21px",
  },
}));

// eslint-disable-next-line react/prop-types
const StartingPopup = ({ onClose }) => {
  const { classes } = useStyles();

  return (
    <Modal opened onClose={onClose} size={"lg"} p={30}>
      <BackgroundImage src={popup} className={classes.img}>
        <Container>
          <Text className={classes.para1}>Deal of the Day</Text>
          <Title className={classes.title}>
            Seeds of Change <br></br> Organic Red <br></br>Rice color
          </Title>
          <Box sx={{ position: "absolute", marginTop: "160px" }}>
            <Text
              style={{
                color: "#3bb77e",
                fontSize: "50px",
                fontWeight: "800px",
              }}
            >
              $28.85{" "}
              <span
                style={{
                  color: "#b6b6b6",
                  fontSize: "28px",
                  fontWeight: "700px",
                }}
              >
                $32.00
              </span>
            </Text>
            <Text
              style={{
                fontFamily: "Lato,sans-serif",
                color: "#7e7e7e",
                fontSize: "16px",
                fontWeight: "400px",
              }}
            >
              Hurry up ! offer End in :
            </Text>
            <div style={{ marginRight: "300px" }}>
              <CountDown />
            </div>

            <Rating defaultValue={2} size='md' style={{ marginTop: "110px" }} />
            <Button
              variant='#3bb77e'
              style={{
                backgroundColor: "#3bb77e",
                color: "white",
                marginTop: "9px",
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Container>
      </BackgroundImage>
    </Modal>
  );
};

export default StartingPopup;
