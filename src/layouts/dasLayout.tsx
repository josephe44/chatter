import { ComponentType, ReactNode, useEffect } from "react";

import { useState } from "react";
import {
  AppShell,
  Navbar,
  Text,
  useMantineTheme,
  createStyles,
  LoadingOverlay,
} from "@mantine/core";
import { SpotlightProvider } from "@mantine/spotlight";
import type { SpotlightAction } from "@mantine/spotlight";
import HeaderComponent from "@/components/dashboard/header";
import {
  IconHome,
  IconDashboard,
  IconFileText,
  IconSearch,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import HeadMeta from "@/components/dashboard/head";
import { NavbarSearch } from "@/components/dashboard/sidebar";
import { auth } from "../../firebase";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  user: {
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor: theme.colors.chatter[4],
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },
}));

const actions: SpotlightAction[] = [
  {
    title: "Home",
    description: "Get to home page",
    onTrigger: () => console.log("Home"),
    icon: <IconHome size="1.2rem" />,
  },
  {
    title: "Dashboard",
    description: "Get full information about current system status",
    onTrigger: () => console.log("Dashboard"),
    icon: <IconDashboard size="1.2rem" />,
  },
  {
    title: "Documentation",
    description: "Visit documentation to lean more about all features",
    onTrigger: () => console.log("Documentation"),
    icon: <IconFileText size="1.2rem" />,
  },
];

const withLayout = (Component: ComponentType, pageName: string = "") => {
  function ApplicationShell(props: any) {
    const theme = useMantineTheme();
    const { classes, cx } = useStyles();

    const [opened, setOpened] = useState(false);
    const [query, setQuery] = useState("");

    const [visible, { toggle }] = useDisclosure(false);

    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          console.log({ user });
          setUser(user as any);
        } else {
          router.push("/auth/login");
        }
      });

      return unsubscribe;
    }, [router]);
    if (!user) return <></>;
    return (
      <SpotlightProvider
        actions={actions}
        searchIcon={<IconSearch size="1.2rem" />}
        searchPlaceholder="Search..."
        shortcut="shift + r"
        nothingFoundMessage={
          <Text>Search re:Current for &quot;{query}&quot;</Text>
        }
        onQueryChange={(q) => setQuery(q)}
      >
        <HeadMeta pageName={pageName} />
        <LoadingOverlay visible={visible} overlayBlur={2} />
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={<NavbarSearch opened={opened} setOpened={setOpened} />}
          header={
            <HeaderComponent
              toggleOverlay={toggle}
              opened={opened}
              setOpened={setOpened}
            />
          }
        >
          <Component {...props} />
        </AppShell>
      </SpotlightProvider>
    );
  }

  return ApplicationShell;
};

export default withLayout;
