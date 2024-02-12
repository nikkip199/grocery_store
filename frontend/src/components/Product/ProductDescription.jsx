import {
    Anchor,
    Chip,
    Group,
    createStyles,
    Paper,
    Text,
    List,
    Divider,
    Title,
  } from "@mantine/core";
  
  const useStyles = createStyles(() => ({
    main: {
      padding: "40px 50px",
      border: "1px solid #ececec",
      borderRadius: "15px",
      marginBottom: "40px",
      //position:"absolute"
    },
    chip: {
      fontFamily: "Quicksand, sans-serif",
      fontSize: "17px",
      fontWeight: "700px",
      textAlign: "center",
      // borderRadius: "30px",
      // padding: "13px 24px",
      backgroundColor: "#fff",
      color: "#6b6b6b",
    },
    Para: {
      fontFamily: "Lato, sans-serif",
      fontSize: "16px",
      fontWeight: "400px",
      lineHeight: "28px",
      color: "#7e7e7e",
      marginTop: "20px",
    },
    title: {
      fontFamily: "Quicksand, sans-serif",
      fontSize: "24px",
      fontWeight: "700px",
      color: "#253D4E",
      marginTop: "20px",
    },
  }));

function ProductDescription() {
    const { classes } = useStyles();
    return (
      <>
        <Paper className={classes.main} w={"900px"}>
          <Anchor>
            <Chip.Group style={{ backgroundColor: "#fff" }}>
              <Group position='center'>
                <Chip size='xl'>
                  <Text className={classes.chip} p={5}>
                    Description
                  </Text>
                </Chip>
                <Chip variant='outline' size='xl'>
                  <Text className={classes.chip} p={5}>
                    Additional Information{" "}
                  </Text>
                </Chip>
                <Chip variant='outline' size='xl'>
                  <Text className={classes.chip} p={5}>
                    Reviews(3)
                  </Text>
                </Chip>
              </Group>
            </Chip.Group>
          </Anchor>
          <Text className={classes.Para} align='left'>
            Uninhibited carnally hired played in whimpered dear gorilla koala
            depending and much yikes off far quetzal goodness and from for
            grimaced goodness unaccountably and meadowlark near unblushingly
            crucial scallop tightly neurotic hungrily some and dear furiously this
            apart.
          </Text>
          <Text className={classes.Para} align='left'>
            Spluttered narrowly yikes left moth in yikes bowed this that grizzly
            much hello on spoon-fed that alas rethought much decently richly and
            wow against the frequent fluidly at formidable acceptably flapped
            besides and much circa far over the bucolically hey precarious
            goldfinch mastodon goodness gnashed a jellyfish and one however
            because.
          </Text>
          <List className={classes.Para}>
            <List.Item>
              Type of Packing <span style={{ marginLeft: "40px" }}>Bottle</span>
            </List.Item>
            <List.Item>
              Color{" "}
              <span style={{ marginLeft: "115px" }}>
                Green, Pink, Powder Blue,Purple
              </span>
            </List.Item>
            <List.Item>
              Quantity Per Case<span style={{ marginLeft: "27px" }}>100ml</span>
            </List.Item>
            <List.Item>
              Ethyl Alochol<span style={{ marginLeft: "67px" }}>70%</span>
            </List.Item>
            <List.Item>
              Piece in One <span style={{ marginLeft: "60px" }}>Carton</span>
            </List.Item>
          </List>
          <Divider mt={20} />
          <Text className={classes.Para}>
            Laconic overheard dear woodchuck wow this outrageously taut beaver hey
            hello far meadowlark imitatively egregiously hugged that yikes
            minimally unanimous pouted flirtatiously as beaver beheld above
            forward energetic across this jeepers beneficently cockily less a the
            raucously that magic upheld far so the this where crud then below
            after jeez enchanting drunkenly more much wow callously irrespective
            limpet.
          </Text>
          <Title className={classes.title}>Packaging & Delivery</Title>
          <Text className={classes.Para}>
            Laconic overheard dear woodchuck wow this outrageously taut beaver hey
            hello far meadowlark imitatively egregiously hugged that yikes
            minimally unanimous pouted flirtatiously as beaver beheld above
            forward energetic across this jeepers beneficently cockily less a the
            raucously that magic upheld far so the this where crud then below
            after jeez enchanting drunkenly more much wow callously irrespective
            limpet.
          </Text>
          <Text className={classes.Para}>
            Scallop or far crud plain remarkably far by thus far iguana lewd
            precociously and and less rattlesnake contrary caustic wow this near
            alas and next and pled the yikes articulate about as less cackled
            dalmatian in much less well jeering for the thanks blindly sentimental
            whimpered less across objectively fanciful grimaced wildly some wow
            and rose jeepers outgrew lugubrious luridly irrationally attractively
            dachshund.
          </Text>
          <Title className={classes.title}>Suggested Use</Title>
          <Text className={classes.Para}>Refrigeration not necessary.</Text>
          <Text className={classes.Para}>Stir before serving</Text>
          <Title className={classes.title}>Other Ingredients</Title>
          <Text className={classes.Para}>
            Organic raw pecans, orginic raw cashews.
          </Text>
          <Text className={classes.Para}>
            This butter was produced using a LTG(Low Temperature Grinding) process
          </Text>
          <Text className={classes.Para}>
            Made in machinery that processes tree nuts but does not process
            peanuts, gluten , dairy or say
          </Text>
          <Title className={classes.title}>Warnings</Title>
          <Text className={classes.Para}>
            Oil separation occurs naturally . May contain pieces of shell.
          </Text>
        </Paper>
      </>
    );
}

export default ProductDescription