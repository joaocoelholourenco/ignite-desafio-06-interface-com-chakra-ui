import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex width="1440" justify="center" height={["50px", "100"]}>
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
