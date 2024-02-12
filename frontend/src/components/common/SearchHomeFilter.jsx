import {
  Menu,
  Grid,
  TextInput,
  Button,
  createStyles,
  Text,
  Card,
  Group,
  Image,
  Stack,
  Rating,
  Center,
} from "@mantine/core";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductSearch } from "../../features/product/productSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  input: {
    position: "absolute",
    minWidth: "493px",
    // minHeight: "60px",
    // marginTop: "20ox",
    radius: "4px",
    borderColor: "#E6F1D5",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  button: {
    backgroundColor: "#80B82D",
    color: "white",
    borderRadius: "3px",
    height: "35px",
    width: "90px",
    left: "405px",
    top: "0%",
    "&:hover": {
      transform: "scale(1.05)",
      textDecoration: "none",
      backgroundColor: "#fed330",
    },

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
  card: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));

const SearchHomeFilter = () => {
  const [search, setSearch] = useState("");
  const [opened, setOpened] = useState(false);

  console.log(search);
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filteredProducts , isSuccess} = useSelector((state) => state.product);
  
 

  console.log(filteredProducts);

  return (
    <TextInput
    // sx={}
    mt={18}
      placeholder="Search"
      size="sm"
      icon={<IconSearch size="0.8rem" stroke={1.5} />}
      rightSectionWidth={70}
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        // dispatch(getProductSearch(search));
      }}
      rightSection={
        <Button
        sx={{backgroundColor:"#80B82D",cursor: "pointer"}}
          onClick={() => {
            dispatch(getProductSearch(search));
            if(isSuccess){
              navigate('/search_result')
            }
            // setOpened(opened);
          }}
          // variant="#80B82D"
        >
          Search
        </Button>
      }
      // styles={{ rightSection: { pointerEvents: "none" } }}
      mb="md"
    />
    // <Menu>
    //   <Grid.Col span={5} lg={5}>
    //     <Menu.Target>
    //       <TextInput
    //         name=""
    //         type="text"
    //         onChange={(e) => {
    //           setSearch(e.target.value);
    //           // dispatch(getProductSearch(search));
    //         }}
    //         value={search}
    //         radius="xs"
    //         size="sm"
    //         placeholder="Search For Product"
    //         className={classes.input}
    //       />
    //     </Menu.Target>

    //     <Button

    //       className={classes.button}
    //       onClick={() => {
    //         dispatch(getProductSearch(search));
    //         setOpened(opened);
    //       }}
    //       variant="#80B82D"
    //     >
    //       search
    //     </Button>
    //   </Grid.Col>

    //   <Menu.Dropdown>
    //     <Menu.Label>
    //       {filteredProducts != null ? (
    //         filteredProducts.map((item, index) => (
    //           <Center maw={400} h={50} mx="auto" key={index}>
    //             <Card padding="5px" radius="md" className={classes.card}>
    //               <Group noWrap>
    //                 {/* <Image src={item.thumbnail} height="60px" width="60px" /> */}
    //                 <Stack justify="space-around">
    //                   <Text
    //                     style={{
    //                       fontFamily: "Quicksand , sans-serif",
    //                       fontSize: "15px",
    //                       lineHeight: "19.2px",
    //                       marginTop: "xs",
    //                       color: "#253D4E",
    //                       "&:hover": {
    //                         transform: "scale(1.05)",
    //                         textDecoration: "none",
    //                         color: "#80B82D",
    //                       },
    //                     }}
    //                     onClick={() => {
    //                       navigate("/all-product");
    //                     }}
    //                   >
    //                      {item.name}
    // //                   </Text>
    // //                 </Stack>
    // //               </Group>
    // //             </Card>
    // //           </Center>
    //         ))
    //       ) : (
    //         <Text
    //           c="red"
    //           sx={{
    //             fontFamily: "Lato, sans-serif",
    //             fontSize: "15px",
    //             fontWeight: "16px",
    //           }}
    //         >
    //           Your Product not found !!!!
    //         </Text>
    //       )}
    //     </Menu.Label>
    //   </Menu.Dropdown>
    // </Menu>
  );
};

export default SearchHomeFilter;
