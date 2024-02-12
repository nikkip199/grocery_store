import React from "react";
import { banner11 } from "../../assets/imgImport";
import { Paper, Box, Text, BackgroundImage } from "@mantine/core";
function SideBanner() {
  return (
    <>
      {/* <Paper style={{ height:"1000px",width:"270px"  }}>
          </Paper> */}
      <BackgroundImage
      p="lg"
        radius="md"
        style={{ width: "270px", height: "320px",marginTop:"30px" }}
        src={banner11}
      >
        <Box
          p="lg"
          sx={{
            width: "75%",
            height: "100%",
            // backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            justify: "center",
          }}
        >
        <Text c="dimmed">Organic</Text>
          <Text
            c="black.5"
            sx={{
              fontFamily: "Quicksand, sans-serif",
              fontSize: "24px",
              color: "#253D4E",
              lineHeight: "25px",
            }}
            // fw={1200}
            lineClamp={3.5}
          >
           Save 17% on <span style={{color:"green"}}>Organic</span> Juice
          </Text>
        </Box>
      </BackgroundImage>
    </>
  );
}

export default SideBanner;
