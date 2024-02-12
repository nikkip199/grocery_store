import { Text, Box, createStyles, Anchor, Stack, Grid } from "@mantine/core";

const useStyles = createStyles(() => ({
  list: {
    backgroundColor: "white",
    color: "#253D4E",
    fontFamily: "Quicksand, sans-serif",

    fontSize: "30px",
  },

  menu: {
    backgroundColor: "white",
    color: "#253D4E",
    fontFamily: "Lato, sans-serif",
    marginRight: "25px",
    fontWeight: 500,
    fontSize: "20px",
    "&:hover": {
      transform: "scale(1.05)",
      textDecoration: "none",
      color: "green",
    },
  },
}));

// eslint-disable-next-line react/prop-types
function Heading({ heading, links }) {
  const { classes } = useStyles();
  return (
    <>
      <Grid
        p={20}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          // marginLeft: "10px",
        }}
      >
        <Grid.Col lg={5} sm={2} md={2}>
          <Box>
            <Text fw={700} className={classes.list}>
              {heading || "Heading"}
            </Text>
          </Box>
        </Grid.Col>
        <Grid.Col lg={7} sm={10} md={10}>
          {" "}
          <Box
            p="md"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              // marginLeft: "10px",
            }}
          >
            {links &&
              links.map((link) => (
                <Stack key={link.link}>
                  <Anchor
                    href={link.link}
                    fz="md"
                 
                    target="_self"
                    className={classes.menu}
                  >
                  <Text fw={500}>   {link.label} </Text>
                  </Anchor>
                </Stack>
              ))}
          </Box>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Heading;
