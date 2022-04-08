import { Box, Flex, Text } from "@chakra-ui/react";

export function Info() {
  return (
    <Flex gap="42px">
      <Flex direction="column" align="center">
        <Text color="yellow" fontWeight="semibold" fontSize={["24px", "48px"]}>
          50
        </Text>
        <Text fontWeight={["regular", "semibold"]} fontSize={["18px", "24px"]}>
          países
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Text color="yellow" fontWeight="semibold" fontSize={["24px", "48px"]}>
          60
        </Text>
        <Text fontWeight={["regular", "semibold"]} fontSize={["18px", "24px"]}>
          línguas
        </Text>
      </Flex>
      <Flex direction="column" align="center">
        <Text color="yellow" fontWeight="semibold" fontSize={["24px", "48px"]}>
          24
        </Text>
        <Text fontWeight={["regular", "semibold"]} fontSize={["18px", "24px"]}>
          cidades +100
        </Text>
      </Flex>
    </Flex>
  );
}
