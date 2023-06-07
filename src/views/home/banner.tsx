import React from "react";
import {
  Card,
  Grid,
  Image,
  Text,
  createStyles,
  rem,
  Title,
  Anchor,
  Container,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  cardBorder: {
    border: "none",
  },

  alignCenter: {
    display: "flex",
    alignItems: "center",
    gap: rem(5),
    color: "000",
  },

  titleStyle: {
    color: "000",
    fontSize: rem(24),
  },

  reversed: {
    flexDirection: "row-reverse",
  },

  textCenter: {
    margin: "auto 0",
  },

  textUnderline: {
    textDecoration: "underline",
  },
}));

export function Banner({ isReverse, item }: any) {
  const { classes, cx } = useStyles();

  return (
    <Container size="1000px">
      <Grid className={item?.isReverse && `${classes.reversed}`} mt={60}>
        <Grid.Col span={12} md={6} lg={6}>
          <Card
            shadow="none"
            padding="xs"
            radius="none"
            className={classes.cardBorder}
          >
            <Title mt={14} className={classes.titleStyle}>
              <Text>About Chatter</Text>
            </Title>
            <Text size="sm" mt={10}>
              Chatter is a multi-functional platform where authors and readers
              can have access to their own content. It aims to be a traditional
              bookworm’s heaven and a blog to get access to more text based
              content. Our vision is to foster an inclusive and vibrant
              community where diversity is celebrated. We encourage
              open-mindedness and respect for all individuals, regardless of
              their backgrounds or beliefs. By promoting dialogue and
              understanding, we strive
            </Text>
          </Card>
        </Grid.Col>
        <Grid.Col span={12} md={6} lg={6}>
          <Card
            shadow="none"
            padding="xs"
            radius="none"
            className={classes.cardBorder}
          >
            <Card.Section>
              <Image
                src="https://media.istockphoto.com/id/1040250650/photo/white-studio-background.jpg?s=612x612&w=0&k=20&c=2sLiCR3BQxRmc6i2phThD3qtfaMGabNGgZAHkSTlofk="
                height={300}
                alt="Random image from unsplash"
                withPlaceholder
                placeholder="https://images.unsplash.com/photo-1612837017391-4b6b7e9b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZyUyMGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
              />
            </Card.Section>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
