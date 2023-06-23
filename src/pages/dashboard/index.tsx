import { Fragment } from "react";
import withLayout from "@/layouts/dasLayout";
import HeadMeta from "@/components/head";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  SimpleGrid,
  Tabs,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import Link from "next/link";
import { IconPencil } from "@tabler/icons-react";
import BlogCard from "@/views/dashboard/blogCard";

const useStyles = createStyles((theme) => ({
  control: {
    color: "#fff",
    background: theme.colors.chatter[0],
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: rem(180),
    height: rem(46),
    borderRadius: theme.radius.md,

    "&:hover": {
      backgroundColor: theme.colors.chatter[0],
    },
  },

  tabStyle: {
    borderBottom: "none",
  },
}));

function Dashboard() {
  const { classes, theme } = useStyles();

  return (
    <Fragment>
      <HeadMeta pageName="Dashboard" />
      <Container fluid>
        <Box mt={40} mb={20}>
          <Flex align="center" justify="space-between">
            <Box>
              <Text fw={600} fz={20} mb={2}>
                FEED
              </Text>
              <Text fz={14}>Explore different content you’d love </Text>
            </Box>

            <Link href="#">
              <Button className={classes.control} leftIcon={<IconPencil />}>
                Post a content
              </Button>
            </Link>
          </Flex>
        </Box>

        <Tabs radius="xs" defaultValue="you">
          <Card withBorder radius={5} pb={2}>
            <Tabs.List className={classes.tabStyle}>
              <Flex justify="space-between" w="100%">
                <Tabs.Tab value="you">
                  <Text fw={600}>For you</Text>
                </Tabs.Tab>
                <Tabs.Tab value="Featured">
                  <Text fw={600}>Featured</Text>
                </Tabs.Tab>
                <Tabs.Tab value="Recent">
                  <Text fw={600}>Recent</Text>
                </Tabs.Tab>
              </Flex>
            </Tabs.List>
          </Card>

          <Tabs.Panel value="you">
            <>
              <SimpleGrid
                cols={1}
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                spacing={0}
              >
                <Card p={0}>
                  <BlogCard />
                  <BlogCard />
                </Card>
              </SimpleGrid>
            </>
          </Tabs.Panel>

          <Tabs.Panel value="Featured" pt="xs">
            Messages tab content
          </Tabs.Panel>

          <Tabs.Panel value="Recent" pt="xs">
            Settings tab content
          </Tabs.Panel>
        </Tabs>
      </Container>
    </Fragment>
  );
}

export default withLayout(Dashboard, "Dashboard");
