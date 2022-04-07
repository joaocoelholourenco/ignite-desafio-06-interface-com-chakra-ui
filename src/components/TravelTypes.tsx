import {
  Center,
  Circle,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  WrapItem,
} from "@chakra-ui/react";

interface TravelTypesProps {
  img: string;
  title: string;
}

export default function TravelTypes({ img, title }: TravelTypesProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <WrapItem>
      <Center>
        <Flex
          direction={isWideVersion ? "column" : "row"}
          align="center"
          justifyContent="center"
        >
          {isWideVersion ? (
            <Image src={img} alt={title} height={85} />
          ) : (
            <Circle bg="yellow" size="8px" />
          )}
          <Text
            mt={["18px", "24px"]}
            fontSize={["18px", "24px"]}
            fontWeight="semibold"
          >
            {title}
          </Text>
        </Flex>
      </Center>
    </WrapItem>
  );
}
