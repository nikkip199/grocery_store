import { createStyles, Button } from "@mantine/core";

import { banner4 } from "../../assets/imgImport";
import { IconArrowNarrowRight } from "@tabler/icons-react";
// import { banner4 } from "../../../../assets/imgImport";
// import { IconArrowNarrowRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  main: {
    position: "relative",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  child: {
    position: "absolute",
    top: 0,
    color: "white",
    display: "flex",
    flexDirection: "column",
    // gap: "250px",
    // padding: "25px",
  },
  imageContainer: {
    // position: "absolute",
    // width: "330px",
    // height: "520px",
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  sideCard: {
    height: "auto",
    borderRadius: "8px",
    overflow: "hidden",
  },
  card: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justify: "center",
    alignItems: "center",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    position: "absolute",
    padding: "20px",
    textAlign: "center",
  },

  title: {
    fontFamily: "Quicksand, sans-serif",

    color: "#253D4E",
    lineHeight: "48px",
    fontSize: "40px",

    // width: "218px",
  },
}));

export const SideCard = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.main}>
      <img src={banner4} className={classes.imageContainer} />

      <div className={classes.child}>
        <h1 className={classes.title}>
          Bring nature <br></br>into your home
        </h1>

        <Button
          variant='white'
          // icon={<IconArrowNarrowRight />}

          style={{
            backgroundColor: "#80B82D",
            color: "#FFFFFF",
            width: "219px",
            height: "30px",
            borderRadius: "4px",
          }}
          rightIcon={<IconArrowNarrowRight width={"26px"} />}

          // icon={<IconArrowNarrowRight />}
        ></Button>
      </div>
    </div>
  );
};
