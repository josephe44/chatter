import { Fragment } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import withLayout from "@/layouts/dasLayout";
import HeadMeta from "@/components/head";
import { Text } from "@mantine/core";


const server = process.env.NEXT_PUBLIC_DB_HOST;

function Dashboard() {
  return (
    <Fragment>
      <HeadMeta pageName="Dashboard       " />
      <Text>Home</Text>
    </Fragment>
  );
}

export default withLayout(Dashboard, "Dashboard");
