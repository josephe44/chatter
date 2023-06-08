import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Router from "next/router";
import { useForm } from "@mantine/form";
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  rem,
  Grid,
  Center,
  Group,
  Divider,
  ButtonProps,
  LoadingOverlay,
  Box,
  Image,
  Tabs,
  Alert,
  Flex,
  Overlay,
  Container,
} from "@mantine/core";

import { loginValues } from "@/utils/form";
import { loginValidator } from "@/utils/validators";

// import Logo from "@/assets/images/logo-text.png";
// import DashboardImg from "@/assets/images/dashboard.png";
import { colors } from "@/constants/theme";
import { IconAlertCircle } from "@tabler/icons-react";

import HeadMeta from "@/components/head";
import { GetServerSideProps } from "next";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
  },

  logoContainer: {
    padding: "0px 50px",
    height: rem(50),
    display: "flex",
    alignItems: "center",

    [theme.fn.smallerThan("lg")]: {
      padding: "0px 15px",
    },
  },

  form: {
    padding: "0 15px",
    maxWidth: rem(600),
    paddingTop: rem(10),
    [theme.fn.smallerThan("md")]: {
      maxWidth: rem(500),
    },
    [theme.fn.smallerThan("sm")]: {
      maxWidth: rem(400),
    },
    [theme.fn.smallerThan("xs")]: {
      maxWidth: rem(300),
    },
  },

  innerForm: {
    width: "400px",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  description: {
    maxWidth: rem(600),
  },

  side: {
    minHeight: "100vh",
    paddingTop: rem(100),
    paddingLeft: rem(65),
    background: theme.colors.recurrent[4],
    display: "flex",
    flexDirection: "column",
  },

  imageContainer: {
    position: "relative",
    minHeight: "100vh",
    backgroundImage:
      "url(https://res.cloudinary.com/eworldtech/image/upload/v1686225360/unsplash_9pjBx5uVBlg_hmxuv9.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    flexGrow: 1,
  },

  hidden: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  textStyle: {
    zIndex: 2,
    flexDirection: "column",
  },

  tabStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  tabWidth: {
    width: rem(200),

    [theme.fn.smallerThan("md")]: {
      width: rem(150),
    },
    [theme.fn.smallerThan("sm")]: {
      width: rem(100),
    },
  },
}));

const server = process.env.NEXT_PUBLIC_DB_HOST;

export default function Register() {
  const { classes } = useStyles();
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: loginValues,
    validate: loginValidator,
  });

  const handleSubmit = async () => {
    setVisible(true);
  };

  return (
    <div className={classes.wrapper}>
      <HeadMeta pageName="Login" />
      <Grid>
        <Grid.Col className={classes.hidden} sm={12} md={5}>
          <div className={classes.imageContainer}>
            <Overlay color="#000" opacity={0.59} zIndex={1} />
            {/* <Image
              height="100vh"
              width="100%"
              withPlaceholder
              placeholder="login-image"
              src="https://res.cloudinary.com/eworldtech/image/upload/v1686225360/unsplash_9pjBx5uVBlg_hmxuv9.png"
              alt="login_bg"
            /> */}

            <Flex align="center" justify="center" className={classes.textStyle}>
              <Text c="white" fz={40} fw="bolder" ta="center">
                CHATTER
              </Text>
              <Container w={500}>
                <Text c="white" ta="center">
                  Unleash the Power of Words, Connect with Like-minded Readers
                  and Writers
                </Text>
              </Container>
            </Flex>
          </div>
        </Grid.Col>

        <Grid.Col sm={12} md={7}>
          <Tabs defaultValue="login" className={classes.tabStyle} my={40}>
            <Tabs.List>
              <Tabs.Tab value="login" className={classes.tabWidth}>
                Login
              </Tabs.Tab>
              <Tabs.Tab value="register" className={classes.tabWidth}>
                Register
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="login">
              <Center mx="auto">
                <Paper className={classes.form} radius={0}>
                  <Box className={classes.innerForm} pos="relative">
                    <LoadingOverlay visible={visible} overlayBlur={2} />
                    <Title
                      order={3}
                      className={classes.title}
                      mt={20}
                      mb={30}
                      ta="center"
                    >
                      Welcome Back
                    </Title>

                    {error && (
                      <Alert
                        icon={<IconAlertCircle size="1rem" />}
                        title="An error occurred!"
                        color="red"
                        mb={30}
                        withCloseButton
                        closeButtonLabel="Close alert"
                        onClose={() => setError("")}
                      >
                        {error}
                      </Alert>
                    )}

                    <TextInput
                      placeholder="Email address"
                      mb="md"
                      size="md"
                      withAsterisk
                      label="Email"
                      value={form.values.email}
                      onChange={(event) =>
                        form.setFieldValue("email", event.currentTarget.value)
                      }
                      error={form.errors.email && form.errors.email}
                    />

                    <PasswordInput
                      placeholder="Your password"
                      mb="md"
                      size="md"
                      withAsterisk
                      label="Password"
                      value={form.values.password}
                      onChange={(event) =>
                        form.setFieldValue(
                          "password",
                          event.currentTarget.value
                        )
                      }
                      error={form.errors.password && form.errors.password}
                    />

                    <Checkbox
                      c={colors.recurrent[0]}
                      label="Remember Me"
                      mt="xl"
                      size="xs"
                    />

                    <Button fullWidth mt="xl" size="md" onClick={handleSubmit}>
                      Login
                    </Button>

                    <Divider label="OR" labelPosition="center" my="lg" />

                    <Text mt="xl" size="xs" ta="center">
                      Don&nbsp;t have an account?{" "}
                      <Link href="/auth/register">Register</Link>
                    </Text>
                  </Box>
                </Paper>
              </Center>
            </Tabs.Panel>

            <Tabs.Panel value="register">register tab content</Tabs.Panel>
          </Tabs>
        </Grid.Col>
      </Grid>
    </div>
  );
}
