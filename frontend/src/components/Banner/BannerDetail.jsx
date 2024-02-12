import { Paper, Grid, BackgroundImage, Text, Button, Box } from "@mantine/core";
import { banner1, banner2, banner3 } from "../../assets/imgImport";

const banner_product_details = [
  {
    id: 1,
    title: "Everyday Fresh and Clean with our Products",
    source: banner1,
  },
  {
    id: 2,
    title: "Make Your Breakfast Healthy and Easy.",
    source: banner2,
  },
  {
    id: 3,
    title: "The Beast Organic Products Online",
    source: banner3,
  },
];

function BannerDetail() {
  return (
    <>
      {banner_product_details.map((item) => (
        <Grid.Col xs={11} md={4} key={item.id}>
          <Paper style={{ height: "262px", width: "420px" }}>
            <BackgroundImage
              radius='md'
              style={{ height: "100%", width: "100%" }}
              src={item.source}
            >
              <Box
                p='lg'
                sx={{
                  width: "50%",
                  height: "100%",
               //   backgroundColor: "whitesmoke",
                  
                  display: "flex",
                  flexDirection: "column",
                  justify: "space-around",
                }}
              >
                <Text
                  c='black.5'
                  sx={{
                    marginTop:"50px",
                    fontFamily: "Quicksand, sans-serif",
                    fontSize: "20px",
                    color: "#253D4E",
                    lineHeight: "28.8px",
                  }}
                  // fw={1200}
                  lineClamp={6}
                >
                  {item.title}
                </Text>
                <Button
                  variant='#80B82D'
                  w={"115px"}
                  h={"30px"}
                  sx={{
                    marginTop:"10px",
                    fontFamily: "Quicksand, sans-serif",
                    lineHeight: "15px",
                    textAlign: "center",
                    color: "#fff",
                    backgroundColor: "#80B82D",
                  }}
                  size='14px'
                >
                  Shop now
                </Button>
              </Box>
            </BackgroundImage>
          </Paper>
        </Grid.Col>
      ))}
    </>
  );
}
export default BannerDetail;
// <Button sx={{ backgroundColor: "green" }}>Shop Now</Button>
{
  /* <BackgroundImage width="100%" src={item.source}>hello</BackgroundImage> */
}
// style={{width:"360px"}}height: "80%"
