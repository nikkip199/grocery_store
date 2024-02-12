import { createStyles, Title, Button } from "@mantine/core";
import { banner4 } from "../../assets/imgImport";
import { IconArrowNarrowRight } from "@tabler/icons-react";

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
    fontFamily: "Quicksand",
    fontWeight: 600,
    color: "#253D4E",
    lineHeight: "48px",
    fontSize: "40px",
    marginTop: "30px",
    marginLeft: "20px",
    width: "228px",
  },
}));

export const SideCard = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.main}>
      <img src={banner4} className={classes.imageContainer} />

      <div className={classes.child}>
        <Title className={classes.title}>Bring nature into your home</Title>

        <Button
          variant='white'
          // icon={<IconArrowNarrowRight />}
          style={{
            backgroundColor: "#80B82D",
            color: "#FFFFFF",
            width: "135px",
            height: "40px",
            marginTop: "90px",
            marginLeft: "20px",
          }}
          rightIcon={<IconArrowNarrowRight width={"26px"} />}
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};
