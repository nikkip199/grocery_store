import { useEffect, useState } from "react";
import { Grid, Paper, createStyles, Text } from "@mantine/core";

const useStyles = createStyles(() => ({
  main: {
    position: "absolute",
    top: "122px",
    padding: "5px",

    // margin: "20px",
    overflow: "hidden",
  },
  child: {
    maxWidth: "60px",
    maxHeight: "60px",
    borderRadius: "4px",
    left: "0%",
    right: "0%",
    top: "0px",
    display: "flex",
    alignItems: "center",
    margin: "3px",
  },
  num: {
    fontFamily: "Quicksand , sans-serif",
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "25px",
    color: "#80B82D",
    display: "inline-block",
  },
  Sub: {
    fontFamily: "Lato , sans-serif",
    Weight: "400px",
    fontSize: "15px",
    lineHeight: "24px",
    color: "#7E7E7E",
  },
}));

export function CountDown() {
  const { classes } = useStyles();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2023-10-01");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate.getTime() - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <div className={classes.main}>
        <Grid gutter={19}>
          <Paper shadow='xs' p='xs' className={classes.child}>
            <Grid.Col span={3}>
              <div>
                <Text className={classes.num}>{countdown.days}</Text>
                <Text className={classes.Sub}>Days</Text>
              </div>
            </Grid.Col>
          </Paper>

          <Paper shadow='xs' p='xs' className={classes.child}>
            <Grid.Col span={3}>
              <div>
                <Text className={classes.num}>{countdown.hours}</Text>
                <Text className={classes.Sub}>Hours</Text>
              </div>
            </Grid.Col>
          </Paper>

          <Paper shadow='xs' p='xs' className={classes.child}>
            <Grid.Col span={3}>
              <div>
                <Text className={classes.num}>{countdown.minutes}</Text>
                <Text className={classes.Sub}>Mins</Text>
              </div>
            </Grid.Col>
          </Paper>
          <Paper shadow='xs' p='xs' className={classes.child}>
            <Grid.Col span={3}>
              <div>
                <Text className={classes.num}>{countdown.seconds}</Text>
                <Text className={classes.Sub}>Sec</Text>
              </div>
            </Grid.Col>
          </Paper>
        </Grid>
      </div>
    </>
  );
}
