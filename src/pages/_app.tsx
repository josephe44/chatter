import "@/styles/globals.scss";

import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

import { colors } from "@/constants/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: "light",
        fontFamily: "Plus Jakarta Sans",
        colors: {
          recurrent: [...colors.recurrent],
          recurrentDark: [...colors.recurrentDark],
          recurrentSecondary: [...colors.recurrentSecondary],
          recurrentGrey: [...colors.recurrentGrey],
        },
        defaultRadius: 2,
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
