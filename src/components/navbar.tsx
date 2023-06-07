import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Container,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import {
  IconCode,
  IconBook,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
// import Logo from "@/assets/logo-text.png";
// import LogoNav from "@/assets/logo.png";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  wrapper: {
    background: "#fff",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: 1000000,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  head: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    border: "none",
    background: "none",
  },

  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: "bold",
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("md")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  logo_text: {
    width: rem(150),
    height: rem(28),
    objectFit: "contain",
  },
  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
  control: {
    color: "#fff",
    background: theme.colors.recurrent[0],
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: rem(120),
    height: rem(42),
    borderRadius: theme.radius.md,

    "&:hover": {
      backgroundColor: theme.colors.recurrent[0],
    },
  },
  control2: {
    border: `1px solid ${theme.colors.recurrent[0]}`,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    background: "none",
    width: rem(120),
    height: rem(42),
    borderRadius: theme.radius.md,
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Tenancy/Mortgage",
    link: "/cases/tenancy",
  },
  {
    icon: IconCoin,
    title: "Subscription/Services",
    link: "/cases/ott",
  },
  {
    icon: IconBook,
    title: "Thrift/Ajo",
    link: "/cases/thrift",
  },
];

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={24} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.colors.recurrent[0]} />
        </ThemeIcon>
        <Link href={item.link} className={classes.link}>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
        </Link>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Box className={classes.wrapper}>
      <Container size={1200}>
        <Header height={70} className={classes.head}>
          <Group position="apart" sx={{ height: "100%" }}>
            {/* <img src={Logo.src} alt="logo-text" className={classes.logo_text} /> */}

            <Text size="lg" fw={500}>
              Chatter
            </Text>

            <Group
              sx={{ height: "100%" }}
              spacing={0}
              className={classes.hiddenMobile}
            >
              <Link href="/" className={classes.link}>
                Home
              </Link>

              <Link href="#" className={classes.link}>
                About us
              </Link>

              <Link href="/contact" className={classes.link}>
                Contact
              </Link>

              <Link href="/blog" className={classes.link}>
                Blog
              </Link>
            </Group>
            <Group className={classes.hiddenMobile}>
              <Button className={classes.control2} variant="default" fw="bold">
                Log in
              </Button>
              <Button className={classes.control} fw="bold">
                Sign up
              </Button>
            </Group>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              className={classes.hiddenDesktop}
            />
          </Group>
        </Header>
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title={
          <>
            <Text size="lg" fw={500}>
              Chatter
            </Text>
          </>
        }
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            About Us
          </a>

          <a href="#" className={classes.link}>
            Contact
          </a>
          <a href="#" className={classes.link}>
            Blog
          </a>
          <Group position="center" grow pb="xl" px="md">
            <Button className={classes.control2} variant="default">
              Log in
            </Button>
            <Button className={classes.control}>Get Started</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
