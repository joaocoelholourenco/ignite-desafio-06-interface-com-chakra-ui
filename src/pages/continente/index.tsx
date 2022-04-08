import { Box, Flex, Text, Image, Wrap, WrapItem } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Info } from "../../components/Info";

export default function Continente() {
  return (
    <Flex direction="column" width="100%">
      <Header />
      <Flex as="main" direction="column">
        <Box
          height={["150px", "350px", "500px"]}
          width="100%"
          backgroundImage={`url("/images/europa-banner.png")`}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Flex
            height="100%"
            flexDirection="column"
            backgroundColor="rgba(28, 20, 1, 0.35)"
          >
            <Flex
              mx="auto"
              width="100%"
              height="100%"
              maxWidth={1440}
              justifyContent={["center", "center", "flex-start"]}
              alignItems={["center", "center", "flex-end"]}
            >
              <Text
                ml={["", "", "140px"]}
                mb={["", "", "60px"]}
                color="white"
                fontWeight="semibold"
                fontSize={["28", "38", "48"]}
              >
                Europa
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Flex mx="auto" width="100%" maxWidth={1440} direction="column">
          <Flex
            flex="1"
            as="section"
            direction={["column", "column", "row"]}
            align="center"
            justify={["space-around"]}
            mx={["16px", "16px", "140px"]}
            my={["16px", "80px"]}
            gap="70px"
          >
            <Text
              fontSize="24px"
              as="p"
              maxWidth="600px"
              textAlign="justify"
              lineHeight={["36px"]}
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
            <Info />
          </Flex>
          <Flex
            as="section"
            mb={["16px", "35px"]}
            direction="column"
            mx={["16px", "16px", "140px"]}
          >
            <Text fontWeight="medium" fontSize={["24", "36"]}>
              Cidades +100
            </Text>
            <Wrap
              justify={["center", "space-around", "flex-start"]}
              mt={["20px", "40px"]}
              spacing={["20px", "20px", "40px"]}
            >
              <WrapItem
                bg="#FFF"
                height={279}
                width={256}
                borderRadius="4"
                flexDirection="column"
              >
                <Box
                  width="100%"
                  height="173px"
                  borderRadius="4px 4px 0  0  "
                  backgroundImage={`url("/images/europa-banner.png")`}
                  backgroundPosition="center"
                  backgroundSize="101%"
                />
                <Flex
                  width="100%"
                  direction="row"
                  margin="auto"
                  align="center"
                  justify="space-between"
                  px="24px"
                >
                  <Flex direction="column">
                    <Text fontSize="20px" fontWeight="semibold">
                      Londres
                    </Text>
                    <Text mt="12px" fontSize="16px" color="#999999">
                      Reino Unido
                    </Text>
                  </Flex>
                  <Image
                    src="/images/bandeira-reino-unido.png"
                    borderRadius="50%"
                    alt="Londres"
                    height="30px"
                    width="30px"
                  />
                </Flex>
              </WrapItem>
              <WrapItem
                bg="#FFF"
                height={279}
                width={256}
                borderRadius="4"
                flexDirection="column"
              >
                <Box
                  width="100%"
                  height="173px"
                  borderRadius="4px 4px 0  0  "
                  backgroundImage={`url("/images/europa-banner.png")`}
                  backgroundPosition="center"
                  backgroundSize="101%"
                />
                <Flex
                  width="100%"
                  direction="row"
                  margin="auto"
                  align="center"
                  justify="space-between"
                  px="24px"
                >
                  <Flex direction="column">
                    <Text fontSize="20px" fontWeight="semibold">
                      Londres
                    </Text>
                    <Text mt="12px" fontSize="16px" color="#999999">
                      Reino Unido
                    </Text>
                  </Flex>
                  <Image
                    src="/images/bandeira-reino-unido.png"
                    borderRadius="50%"
                    alt="Londres"
                    height="30px"
                    width="30px"
                  />
                </Flex>
              </WrapItem>
              <WrapItem
                bg="#FFF"
                height={279}
                width={256}
                borderRadius="4"
                flexDirection="column"
              >
                <Box
                  width="100%"
                  height="173px"
                  borderRadius="4px 4px 0  0  "
                  backgroundImage={`url("/images/europa-banner.png")`}
                  backgroundPosition="center"
                  backgroundSize="101%"
                />
                <Flex
                  width="100%"
                  direction="row"
                  margin="auto"
                  align="center"
                  justify="space-between"
                  px="24px"
                >
                  <Flex direction="column">
                    <Text fontSize="20px" fontWeight="semibold">
                      Londres
                    </Text>
                    <Text mt="12px" fontSize="16px" color="#999999">
                      Reino Unido
                    </Text>
                  </Flex>
                  <Image
                    src="/images/bandeira-reino-unido.png"
                    borderRadius="50%"
                    alt="Londres"
                    height="30px"
                    width="30px"
                  />
                </Flex>
              </WrapItem>
              <WrapItem
                bg="#FFF"
                height={279}
                width={256}
                borderRadius="4"
                flexDirection="column"
              >
                <Box
                  width="100%"
                  height="173px"
                  borderRadius="4px 4px 0  0  "
                  backgroundImage={`url("/images/europa-banner.png")`}
                  backgroundPosition="center"
                  backgroundSize="101%"
                />
                <Flex
                  width="100%"
                  direction="row"
                  margin="auto"
                  align="center"
                  justify="space-between"
                  px="24px"
                >
                  <Flex direction="column">
                    <Text fontSize="20px" fontWeight="semibold">
                      Londres
                    </Text>
                    <Text mt="12px" fontSize="16px" color="#999999">
                      Reino Unido
                    </Text>
                  </Flex>
                  <Image
                    src="/images/bandeira-reino-unido.png"
                    borderRadius="50%"
                    alt="Londres"
                    height="30px"
                    width="30px"
                  />
                </Flex>
              </WrapItem>
              <WrapItem
                bg="#FFF"
                height={279}
                width={256}
                borderRadius="4"
                flexDirection="column"
              >
                <Box
                  width="100%"
                  height="173px"
                  borderRadius="4px 4px 0  0  "
                  backgroundImage={`url("/images/europa-banner.png")`}
                  backgroundPosition="center"
                  backgroundSize="101%"
                />
                <Flex
                  width="100%"
                  direction="row"
                  margin="auto"
                  align="center"
                  justify="space-between"
                  px="24px"
                >
                  <Flex direction="column">
                    <Text fontSize="20px" fontWeight="semibold">
                      Londres
                    </Text>
                    <Text mt="12px" fontSize="16px" color="#999999">
                      Reino Unido
                    </Text>
                  </Flex>
                  <Image
                    src="/images/bandeira-reino-unido.png"
                    borderRadius="50%"
                    alt="Londres"
                    height="30px"
                    width="30px"
                  />
                </Flex>
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
