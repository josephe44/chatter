import React from "react";
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

const useStyles = createStyles((theme) => ({
  control: {
    color: "#fff",
    background: theme.colors.chatter[0],
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: rem(120),
    height: rem(46),
    borderRadius: theme.radius.md,

    "&:hover": {
      backgroundColor: theme.colors.chatter[0],
    },
  },
}));

function NewBlog() {
  const { classes, theme } = useStyles();
  return (
    <Fragment>
      <HeadMeta pageName="Create New Blog" />
      <Container fluid>
        <Box mt={40} mb={20}>
          <Flex align="center" justify="space-between">
            <Box></Box>

            <Button className={classes.control}>Publish</Button>
          </Flex>
        </Box>
      </Container>
    </Fragment>
  );
}

export default withLayout(NewBlog, "Create-Blog");
