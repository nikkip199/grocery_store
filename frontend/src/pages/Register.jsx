import {
  Text,
  SimpleGrid,
  TextInput,
  PasswordInput,
  Group,
  Button,
  createStyles,
  rem,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { register } from "../features/auth/authSlice";
import { register,reset } from "../features/auth/signUpSlice";

// import { register } from './../features/auth/authSlice';
const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");
  return {
    Wrapper: {
      display: "flex",
      padding: rem(3),
      backgroundColor:
        'theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,',
    },
    banner: {
      backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-11-min.png")`,
      position: "relative",
      backgroundSize: "cover",
      boxSizing: "border-box",
      backgroundPosition: "center",
      border: `${rem(8)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(390)}`,
      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },
    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },
    title: {
      fontFamily: "Quicksand, sans-serif",

      color: "#253D4E",
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",
      fontFamily: "lato,sans-serif",
      color: "#7E7E7E",
      borderRadius: "10px",
      height: "50px",
      padding: "0px 20px",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },
    control: {
      backgroundColor: "#80B82D",
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});
const Register = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    address: "",
  });
  const dispatch = useDispatch();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { first_name, last_name, email, password, address } = formData;

  const { user, isSuccess, isLoading, isError } = useSelector(
    (state) => state.signup
  );
  // console.log("User: " + user);
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      first_name,
      last_name,
      email,
      password,
    };

    dispatch(register(userData));

    if (isSuccess) {
      toast.success("Signup successfully..!Verification link sent to your email..", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      // toast.success("Verification link sent to your email..!", {
      //   position: toast.POSITION.BOTTOM_RIGHT,
      // });
    } else if (isLoading) {
      toast.info("Signing..!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else if (isError) {
      toast.error("Try Again..!", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.error("Something went wrong", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
    dispatch(reset());
    console.log(userData);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      address: "",
    })
  };
  const { classes } = useStyles();

  return (
    <>
      <motion.Paper
        shadow="md"
        radius="lg"
        mt={48}
        mb={48}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={classes.Wrapper}>
          <div className={classes.banner}>{/* banner */}</div>

          <form className={classes.form} onSubmit={onSubmit}>
            <Text fz="55px" fw={700} className={classes.title}>
              Sign Up
            </Text>

            <div className={classes.fields}>
              <SimpleGrid
                cols={2}
                mt={7}
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
              >
                <TextInput
                  fw={400}
                  styles={{
                    label: {
                      fontFamily: "lato,sans-serif",
                      color: "#253D4E",
                    },
                  }}
                  label="First Name"
                  placeholder="Your first name"
                  color="#7e7e7e"
                  onChange={onChange}
                  value={first_name}
                  name="first_name"
                  type="text"
                />
                <TextInput
                  fw={400}
                  styles={{
                    label: {
                      fontFamily: "lato,sans-serif",
                      color: "#253D4E",
                    },
                  }}
                  label="Last Name"
                  placeholder="Your last name"
                  onChange={onChange}
                  value={last_name}
                  name="last_name"
                  type="text"
                />
              </SimpleGrid>

              <TextInput
                fw={400}
                styles={{
                  label: {
                    fontFamily: "lato,sans-serif",
                    color: "#253D4E",
                  },
                }}
                mt="md"
                label="email"
                placeholder="hello@gmail.com"
                required
                onChange={onChange}
                value={email}
                name="email"
                type="email"
              />

              {/* <TextInput mt="md" label="password" placeholder="" required /> */}
              <PasswordInput
                fw={400}
                styles={{
                  label: {
                    fontFamily: "lato,sans-serif",
                    color: "#253D4E",
                  },
                }}
                className={classes.fields}
                mt="md"
                placeholder="Password"
                label="Password"
                // description="Password must include at least one letter, number and special character"
                withAsterisk
                onChange={onChange}
                value={password}
                name="password"
                type="password"
              />
              <TextInput
                styles={{
                  label: {
                    fontFamily: "lato,sans-serif",
                    color: "#253D4E",
                  },
                }}
                mt="md"
                label="Address"
                required
                onChange={onChange}
                value={address}
                name="address"
                type="text"
              />

              <Group position="Apart" mt="md">
                <Button
                  // onClick={notify}
                  size="md"
                  variant="filled"
                  color="yellow"
                  type="submit"
                  className={classes.control}
                >
                  Sign up
                </Button>
                <div>
                  <Text
                    style={{
                      color: "#253D4E",
                      fontFamily: "Lato, sans-serif",
                      fontSize: "13px",
                    }}
                  >
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <span
                        style={{
                          color: "#80B82D",
                          fontFamily: "Lato, sans-serif",
                          fontSize: "16px",
                          cursor: "pointer",
                        }}
                      >
                        Login
                      </span>
                    </Link>
                  </Text>
                </div>
              </Group>
            </div>
          </form>
        </div>
      </motion.Paper>
    </>
  );
};

export default Register;
