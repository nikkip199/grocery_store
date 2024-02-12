import { SimpleGrid, Anchor, createStyles, Menu } from "@mantine/core";

const useStyles = createStyles(() => ({
  anchor: {
    fontFamily: "Quicksand, sans-serif",
    fontSize:"18px",
    // fontSize: "16px",
    lineHeight: "20px",
    color: "#253D4E",
    "&:hover": {
      color: "#80B82D",
      textDecoration:"none",
    },
  },
  text: {
    fontFamily: "Lato, sans-serif",
    fontWeight: "600",
    // fontSize: "18px",
    color: "#7e7e7e",
    cursor: "pointer",
    // textDecoration: "none",
    "&:hover": {
      transform: "scale(1.05)",
      textDecoration: "none",
      color: "#80B82D",
    },
  },
}));

// eslint-disable-next-line react/prop-types
const MenuHeadingDropdown = ({ dropdownContent, heading }) => {
  const { classes } = useStyles();

  return (
    <Menu shadow='lg' trigger='hover'>
      <Menu.Target style={{ backgroundColor: "#fff" }}>
        <Anchor
          href='#'
          target='_self'
          className={classes.anchor}
          mr={"45px"}
          style={{
            // textDecoration: "none",
            fontFamily: "QuickSand, sans-serif",
            fontSize: "18px",
            fontWeight: "400px",
            cursor: "pointer",
          }}
        >
          {heading || "Heading"}
        </Anchor>
      </Menu.Target>
      <Menu.Dropdown style={{ backgroundColor: "#fff", padding: "15px" }}>
        <SimpleGrid>
          {dropdownContent.map((list,index) => (
            <Menu.Label
              key={index}
              component='Anchor'
              sx={{
                fontFamily: "Lato, sans-serif",
                fontSize: "15px",
                textDecoration: "none",
                fontWeight: "12px",
              }}
              href='#'
              // className={classes.text}
            >
              <span className={classes.text}>{list}</span>
            </Menu.Label>
          ))}
        </SimpleGrid>
      </Menu.Dropdown>
    </Menu>
  );
};

export default MenuHeadingDropdown;
