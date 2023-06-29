import React, { useState } from "react";
import { GetServerSideProps } from "next";
import withLayout from "@/layouts/dasLayout";
import HeadMeta from "@/components/head";
import { Fragment } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import {
  IconBrandWechat,
  IconBook,
  IconHeart,
  IconReportAnalytics,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { getDoc, doc } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";

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
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    overflow: "hidden",
  },
  control: {
    color: "#fff",
    background: "#000",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: rem(100),
    height: rem(46),
    borderRadius: theme.radius.md,

    "&:hover": {
      backgroundColor: "#000",
    },
  },
}));

function SingleBlog({ data }: any) {
  const { classes, theme } = useStyles();
  const router = useRouter();

  //   get the id from the url
  const { id } = router.query;

  const [blog, setBlog] = useState(null);

  return (
    <Fragment>
      <HeadMeta pageName="Single Blog" />
      <Container fluid>
        <Box mt={40} mb={20}>
          <Flex align="center" justify="space-between">
            <Link href="/dashboard">
              <Button className={classes.control}>Go back</Button>
            </Link>
          </Flex>
        </Box>
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
                  <Text fw={500} fz={20} tt="capitalize">
                    {data?.user}
                  </Text>
                  <Flex align="center" gap={10} mt={2}>
                    <Text fz={14}>Product designer</Text>
                    <Text fz={14}>
                      {dayjs(JSON.parse(data?.createdAt)).format(
                        "MMMM D, YYYY"
                      )}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Box className={classes.cardImage} mt={20}>
                <img
                  src={data?.image}
                  alt="image"
                  className={classes.blogImage}
                />
              </Box>

              <Box mb={10}>
                <Text fw={600} fz={24} mt={10} tt="capitalize">
                  {data?.title}
                </Text>
                <Flex align="center">
                  <IconBook size={14} />
                  <Text ml={5} fz={12}>
                    10 mins read
                  </Text>
                </Flex>
              </Box>
              <Text fz={16} mt={20}>
                {data?.body}
              </Text>
            </Box>
            <Box mt={20}>
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
            </Box>
          </Container>
        </Card>
      </Container>
    </Fragment>
  );
}

export default withLayout(SingleBlog, "Blog");

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { req } = ctx;
  const id = ctx.params?.id;

  if (!id) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  let data = null;

  try {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      data = docSnap.data();
      data.createdAt = JSON.stringify(data.createdAt.toDate());
    } else {
      return {
        notFound: true,
      };
    }

    return {
      props: { data },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
};
