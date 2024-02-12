import {
  Badge,
  Card,
  Grid,
  Stack,
  Text,
  createStyles,
  Progress,
} from "@mantine/core";

import { IconX } from "@tabler/icons-react";
const useStyles = createStyles(() => ({
  bdge: {
    fontFamily: "Lato, sans-serif",
    "&:hover": {
      transform: "scale(1.05)",

      color: "#cf2e2e",
    },
  },
}));
// eslint-disable-next-line react/prop-types
function ChipsCard({ chips }) {
  const { classes } = useStyles();
  return (
    <>
      <Card
        radius="lg"
        shadow="xs"
        sx={{
          width: "270px",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        }}
      >
        <Grid>
          <Grid.Col lg={12}>
            <Stack>
              <Text
                fw={500}
                sx={{ fontFamily: "Quicksand, sans-serif", fontSize: "25px" }}
              >
                Product Tags
              </Text>
              <Progress
                radius="xs"
                size="xs"
                value={50}
                color="#61ce70"
                sx={{ marginBottom: "15px" }}
              />
            </Stack>
            {chips &&
              // eslint-disable-next-line react/prop-types
              chips.map((chipItem,index) => (
                <Badge
                  key={index}
                  size="xl"
                  //variant="light"
                  sx={{
                    justify: "center",
                    color: "#61ce70",
                    backgroundColor: "white",

                    marginRight: "10px",
                    marginBottom: "20px",
                    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
                    textTransform: "capitalize",
                  }}
                  className={classes.bdge}
                  leftSection={<IconX size={13} color="gray" />}
                >
                  {chipItem.title}
                </Badge>
              ))}
          </Grid.Col>
        </Grid>
      </Card>
    </>
  );
}

export default ChipsCard;
