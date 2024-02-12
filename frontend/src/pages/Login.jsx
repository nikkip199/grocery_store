import {
  Text,
  TextInput,
  PasswordInput,
  Group,
  Button,
  createStyles,
  rem,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { calcLength, motion } from "framer-motion";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
// import loginSlice from "../features/auth/authSlice";
import { toast } from "react-toastify";
// import { login, reset } from "../features/auth/authSlice";
import { login, reset } from "../features/auth/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
      backgroundImage: `url("https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/05/banner-3.png")`,
      // backgroundImage: banner14,
      position: "relative",
      backgroundSize: "cover",
      boxSizing: "border-box",
      backgroundPosition: "center",
      border: `${rem(6)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(490)}`,
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

const Login = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // creating state to store input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const {
    // user,
    token,
    isLoading,
    isSuccess,
    message,
    isError,
 
  } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.signup);
  
  useEffect(() => {
    if (isError) {
      if (message.includes("not verified")) {
        toast.info("Verify your email", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else if (message.includes("not exist")) {
        toast.error(message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else toast.error("Something went wrong");
    } else if (isLoading) {
      toast.success("Logging...", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else if (isSuccess) {
      // dispatch(login(user));
      toast.success("Logged in successfully", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: email || "",
      password: password || "",
    };

    console.log(userData);
    dispatch(login(userData));
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <motion.Paper
        shadow="md"
        radius="lg"
        mt={45}
        mb={45}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={classes.Wrapper}>
          <div className={classes.banner}>{/* banner */}</div>

          <form className={classes.form} onSubmit={onSubmit}>
            <Text fz="55px" fw={700} className={classes.title}>
              Login
            </Text>
            <div className={classes.fields}>
              <TextInput
                name="email"
                type="text"
                value={email}
                fw={400}
                styles={{
                  label: {
                    fontFamily: "lato,sans-serif",
                    color: "#253D4E",
                  },
                }}
                mt="md"
                label="Username or email address"
                placeholder="hello@gmail.com"
                required
                onChange={onChange}
              />

              <PasswordInput
                name="password"
                type="password"
                value={password}
                onChange={onChange}
                label="Password"
                placeholder="Password"
                withAsterisk
                fw={400}
                mt="md"
                className={classes.fields}
                styles={{
                  label: {
                    fontFamily: "lato,sans-serif",
                    color: "#253D4E",
                  },
                }}
              />

              <Group position="left" mt="lg">
                <Button
                  // onClick={notify}
                  size="sm"
                  color="lime"
                  variant="filled"
                  type="submit"
                >
                  Log In
                </Button>

                {/* <Flex gap={5}>
                  <Checkbox
                    mb={12}
                    size={14}
                    style={{
                      fontFamily: "Lato, sans-serif",
                      fontSize: "10px",
                    }}
                  />
                  <Input.Description mb={12} mr={19}>
                    Remember me
                  </Input.Description>
                </Flex> */}
              </Group>
              {/* <Anchor
                href="#"
                type="_self"
                style={{
                  color: "#80B82D",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "13px",
                }}
              >
                Lost your password?
              </Anchor> */}
            </div>
            <div>
              <Text
                component={Link}
                to={"/sign-up"}
                style={{
                  color: "#80B82D",
                  fontFamily: "Lato, sans-serif",
                  fontSize: "13px",
                  cursor: "pointer",
                }}
              >
                Create an account
              </Text>
            </div>
          </form>
        </div>
      </motion.Paper>
    </>
  );
};

export default Login;
