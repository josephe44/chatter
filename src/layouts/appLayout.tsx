import { ComponentType, Fragment } from "react";

import HeadMeta from "@/components/head";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function withLayout(Component: ComponentType) {
  const LayoutComponent = () => {
    return (
      <Fragment>
        <HeadMeta />
        <Navbar />
        <Component />
        <Footer />
      </Fragment>
    );
  };

  return LayoutComponent;
}
