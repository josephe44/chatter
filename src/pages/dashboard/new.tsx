import React, { useState } from "react";
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
  FileButton,
  AspectRatio,
  Tabs,
  Text,
  TextInput,
  createStyles,
  rem,
  Group,
} from "@mantine/core";
import Link from "next/link";
import { IconCamera } from "@tabler/icons-react";

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

  titleStyle: {
    marginTop: rem(20),
  },

  imageStyle: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
  },
}));

function NewBlog() {
  const { classes, theme } = useStyles();
  const [file, setFile] = useState<File | null>(null);

  return (
    <Fragment>
      <HeadMeta pageName="Create New Blog" />
      <Container fluid>
        <Box mt={40} mb={20}>
          <Flex align="center" justify="space-between">
            <Box></Box>

            <Button className={classes.control}>Publish</Button>
          </Flex>
          <Box mt={40}>
            <Flex align="center" gap={40} w="100%">
              {!file && (
                <Group position="center">
                  <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => (
                      <IconCamera size={48} strokeWidth={1} {...props}>
                        Upload image
                      </IconCamera>
                    )}
                  </FileButton>
                </Group>
              )}

              <Box w="100%">
                {file && (
                  <AspectRatio ratio={1000 / 400}>
                    <img
                      src={URL.createObjectURL(file)}
                      alt="blog image"
                      className={classes.imageStyle}
                    />
                  </AspectRatio>
                )}
                <TextInput placeholder="Title" size="xl" variant="unstyled" />
                <TextInput
                  placeholder="Write a post..."
                  size="xl"
                  variant="unstyled"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
      </Container>
    </Fragment>
  );
}

export default withLayout(NewBlog, "Create-Blog");
