import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: "#FFBA08",
    white: "#F5F8FA",
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "#F5F8FA",
        color: "#47585B",
      },
    },
  },
});
