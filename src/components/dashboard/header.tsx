import { useState } from "react";
import {
  Header,
  Text,
  MediaQuery,
  Burger,
  Image,
  useMantineTheme,
  Group,
  Avatar,
  rem,
  Flex,
  Menu,
  UnstyledButton,
  createStyles,
  Indicator,
  Kbd,
  TextInput,
  Container,
} from "@mantine/core";
import { spotlight } from "@mantine/spotlight";

import Logo from "@/assets/images/logo-text.png";
import {
  IconChevronDown,
  IconLogout,
  IconMaximize,
  IconPlayerPause,
  IconSearch,
  IconSettings,
  IconSwitchHorizontal,
  IconTrash,
} from "@tabler/icons-react";
import { RiNotification2Line } from "react-icons/ri";
import { colors } from "@/constants/theme";
import { useFullscreen } from "@mantine/hooks";
// import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";

const server = process.env.NEXT_PUBLIC_DB_HOST;

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

  userText: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  wrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    justifyContent: "space-between",
  },

  textkbdContainer: {
    flexGrow: 1,
    display: "flex",
    margin: "0 20px 0 0",

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  searchbtn: {
    display: "none",

    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
  },

  textkbd: {
    maxWidth: rem(800),
    width: "100%",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      minWidth: "100%",
    },
  },

  bgHover: {
    "&:hover": {
      backgroundColor: theme.colors.chatter[4],
      color: theme.colors.chatter[0],
    },
  },
}));

interface Props {
  toggleOverlay: () => void;
  opened: boolean;
  setOpened: (opened: boolean) => void;
}

export default function HeaderComponent({
  toggleOverlay,
  opened,
  setOpened,
}: Props) {
  const router = useRouter();
  const theme = useMantineTheme();
  const { classes, cx } = useStyles();

  const { toggle, fullscreen } = useFullscreen();

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const handleLogout = async () => {};

  return (
    <Header height={{ base: 60, md: 60 }} p="md">
      <div className={classes.wrapper}>
        <div style={{ width: 234 }}>
          <Flex align="center">
            {/* <Image src={Logo.src} width={100} /> */}
          </Flex>
        </div>

        <div className={classes.textkbdContainer}>
          <TextInput
            className={classes.textkbd}
            placeholder="Search"
            icon={<IconSearch size="1rem" />}
            rightSectionWidth={90}
            rightSection={
              <Flex align="center">
                <Kbd mr={5} size="xs">
                  Shift
                </Kbd>
                <span>+</span>
                <Kbd ml={5} size="xs">
                  R
                </Kbd>
              </Flex>
            }
            styles={{ rightSection: { pointerEvents: "none" } }}
          />
        </div>

        <Group spacing={7}>
          <Flex align="center">
            <UnstyledButton
              mr={15}
              className={classes.searchbtn}
              onClick={() => spotlight.open()}
            >
              <IconSearch color={colors.chatter[2]} size={20} />
            </UnstyledButton>

            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <Indicator
                inline
                label={<Text size="8px">2</Text>}
                size={15}
                mr={20}
                mt={3}
              >
                <RiNotification2Line color={colors.chatter[2]} size={20} />
              </Indicator>
            </MediaQuery>

            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <UnstyledButton mr={10} onClick={toggle}>
                <IconMaximize color={colors.chatter[2]} size={20} />
              </UnstyledButton>
            </MediaQuery>

            <Menu
              width={260}
              position="bottom-end"
              transitionProps={{ transition: "pop-top-right" }}
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
              withinPortal
            >
              <Menu.Target>
                <UnstyledButton className={cx(classes.user)}>
                  <Group spacing={7}>
                    <Avatar radius="xl" size={30} color="red">
                      AE
                    </Avatar>
                    <Group className={cx(classes.userText)}>
                      <Text
                        weight={500}
                        size="xs"
                        sx={{ lineHeight: 1 }}
                        ml={3}
                        mr={3}
                      >
                        Anyiam Ebube
                      </Text>
                      <IconChevronDown size={rem(12)} stroke={1.5} />
                    </Group>
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Settings</Menu.Label>
                <Menu.Item
                  className={classes.bgHover}
                  icon={<IconSettings size="0.9rem" stroke={1.5} />}
                >
                  Account settings
                </Menu.Item>
                <Menu.Item
                  className={classes.bgHover}
                  icon={<IconSwitchHorizontal size="0.9rem" stroke={1.5} />}
                >
                  Change account
                </Menu.Item>
                <Menu.Item
                  className={classes.bgHover}
                  onClick={handleLogout}
                  icon={<IconLogout size="0.9rem" stroke={1.5} />}
                >
                  Logout
                </Menu.Item>

                <Menu.Divider />

                <Menu.Label>Danger zone</Menu.Label>
                <Menu.Item
                  className={classes.bgHover}
                  icon={<IconPlayerPause size="0.9rem" stroke={1.5} />}
                >
                  Pause subscription
                </Menu.Item>
                <Menu.Item
                  className={classes.bgHover}
                  color="red"
                  icon={<IconTrash size="0.9rem" stroke={1.5} />}
                >
                  Delete account
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>

            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </MediaQuery>
          </Flex>
        </Group>
      </div>
    </Header>
  );
}
