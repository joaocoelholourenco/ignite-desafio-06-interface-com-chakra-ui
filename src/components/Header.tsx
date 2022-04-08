import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as="header" width="1440" justify="center" height={["50px", "100px"]}>
      <Flex flex="1" mx="8" justify="center" align="center">
        <Image
          src="./images/Logo.svg"
          alt="World Trip"
          height={["22px", "45px"]}
        />{" "}
      </Flex>
    </Flex>
  );
}
