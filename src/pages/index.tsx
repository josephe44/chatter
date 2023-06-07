import { Fragment } from "react";
import { Container } from "@mantine/core";
import withLayout from "@/layouts/appLayout";
import { Hero } from "@/views/home/hero";
import { Banner } from "@/views/home/banner";
import { Features } from "@/views/home/features";
import { Testimony } from "@/views/home/testimony";
import { FooterBanner } from "@/views/home/footerBanner";

const Home = () => {
  return (
    <div style={{ width: "100%" }}>
      <Hero />
      <Banner />
      <Features />
      <Testimony />
      <FooterBanner />
    </div>
  );
};

export default withLayout(Home);
