import React from "react";
import {
  Box,
  Card,
  Container,
  Flex,
  Text,
  createStyles,
} from "@mantine/core";
import {
  IconBrandWechat,
  IconBook,
  IconHeart,
  IconReportAnalytics,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    cursor: "pointer",
  },

  cardImage: {
    height: "400px",
    width: "100%",
    overflow: "hidden",
  },

  blogImage: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  avatar: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },

  profileImage: {
    height: "80px",
    width: "80px",
    borderRadius: "50%",
    overflow: "hidden",
  },
}));

function BlogCard() {
  const { classes, theme } = useStyles();
  return (
    <Card
      withBorder
      radius={5}
      className={classes.card}
      px={20}
      component="a"
      href="#"
      mb={0}
    >
      <Container size="900px" m="0">
        <Box>
          <Flex align="center" gap={10}>
            <Box className={classes.profileImage}>
              <img
                src="https://rb.gy/11l2d"
                alt="image"
                className={classes.avatar}
              />
            </Box>

            <Flex direction="column">
              <Text fw={500} fz={20}>
                Grace Ikpang
              </Text>
              <Flex align="center" gap={10} mt={2}>
                <Text fz={14}>Product designer</Text>
                <Text fz={14}>.May 25th, 2023</Text>
              </Flex>
            </Flex>
          </Flex>

          <Box mb={10}>
            <Text fw={600} fz={24} mt={10}>
              Starting out as a Product designer
            </Text>
            <Flex align="center">
              <IconBook />
              <Text ml={5} fz={14}>
                10 mins read
              </Text>
            </Flex>
          </Box>
          <Text fz={16}>
            Embarking on a journey as a product designer can be an exhilarating
            and fulfilling experience. As a profession that bridges the realms
            of art, technology, and problem-solving, product design offers an
            opportunity to shape the way people interact with the world around
            them.
          </Text>
        </Box>

        <Box className={classes.cardImage} mt={20}>
          <img
            src="https://rb.gy/d0tu3"
            alt="image"
            className={classes.blogImage}
          />
        </Box>
        <>
          <Flex align="center" justify="space-between" mt={10} mb={10}>
            <Flex align="center">
              <IconBrandWechat />
              <Text fz={14} ml={5}>
                200
              </Text>
            </Flex>
            <Flex align="center">
              <IconHeart />
              <Text fz={14} ml={5}>
                120
              </Text>
            </Flex>
            <Flex align="center">
              <IconReportAnalytics />
              <Text fz={14} ml={5}>
                2980 views
              </Text>
            </Flex>
          </Flex>
        </>
      </Container>
    </Card>
  );
}

export default BlogCard;
