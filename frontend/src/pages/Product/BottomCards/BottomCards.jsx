import { SimpleGrid, Text, Card, Stack, Image, Box } from "@mantine/core";
import { icon1,icon2,icon3,icon4,icon5 } from "../../../assets/imgImport";

const BottomCardData = [
  {
    id: 1,
    source: icon1,
    label:" Orders $50 or more",
    title: "Best Prices",
  },
  {
    id: 2,
    source: icon2,
    label:" 24/7 amazing services",
    title: "Free Delievery",
  },
  {
    id: 3,
    source: icon3, 
    label:"When you sign up",
    title: "Great daily deals",
  },
  {
    id: 4,
    source: icon4,
    label:" Mega Discounts",
    title: "Wide assortment",
  },
  {
    id: 5,
    source: icon5,
    label:"Easy Returns",
    title: "Within 30 days",
  },
];
function BottomCards() {
  return (
    <SimpleGrid
      cols={5}
    
      spacing='md'
      breakpoints={[
        { maxWidth: "62rem", cols: 5, spacing: "md" },
        { maxWidth: "48rem", cols: 2, spacing: "sm" },
        { maxWidth: "36rem", cols: 1, spacing: "sm" },
      ]}
    >
      {BottomCardData.map((item) => {
        return (
          <Card bg=' #eee' sx={{width:"250px"}} p="md" radius='md' key={item.id}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justify: "space-evenly",
                alignItems: "center",
              }}
            >
              <Box w='50px'>
                <Image width='100%' src={item.source} />
              </Box>
              <Stack sx={{ display: "flex", flexDirection: "column" }}>
                <Text sx={{ fontFamily: "Lato, sans-serif", fontSize: "18px" }}>
                  {item.title}
                </Text>
                <Text
                  sx={{ fontFamily: "Lato, sans-serif", fontSize: "16px" }}
                  c='dimmed'
                >
                  {item.label}
                </Text>
              </Stack>
            </Stack>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}

export default BottomCards;
