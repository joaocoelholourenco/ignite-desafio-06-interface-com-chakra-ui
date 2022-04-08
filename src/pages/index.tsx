import {
  Flex,
  Box,
  Text,
  Image,
  useBreakpointValue,
  HStack,
  Wrap,
  Divider,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { Header } from "../components/Header";
import { Slide } from "../components/Slide";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column">
      <Header />
      <Box
        width="100%"
        height={["163px", "210px", "335px"]}
        backgroundImage={`url("/images/Background-banner.jpg")`}
        backgroundPosition="center 25%"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Flex
          mx="auto"
          height="100%"
          maxWidth={1440}
          justifyContent="space-between"
          paddingX={["16px", "80px"]}
        >
          <Flex direction="column" justify="center">
            <Text
              fontSize={["20", "28", "36"]}
              fontWeight="medium"
              lineHeight={["30px", "40px", "54px"]}
              color="#F5F8FA"
            >
              5 Continentes,
              <br /> infinitas possibilidades.
            </Text>
            <Text
              fontWeight="normal"
              fontSize={["14", "16", "20"]}
              mt="20px"
              lineHeight={["21px", "25px", "30px"]}
              color="#DADADA"
            >
              Chegou a hora de tirar do papel a viagem que
              <br /> você sempre sonhou.
            </Text>
          </Flex>
          {isWideVersion && (
            <Flex pt="76px">
              <Image
                height={290}
                width={431}
                top="76px"
                src="./images/Airplane.svg"
                alt="Avião"
              />
            </Flex>
          )}
        </Flex>
      </Box>
      <Flex direction="column" w="100%" mx="auto" maxWidth={1440}>
        <Wrap
          as="section"
          justify="space-between"
          mx={["50px", "140px"]}
          my={["36px", "90px"]}
          mt={["9px"]}
        >
          <TravelTypes img="./images/cocktail.svg" title="vida nortuna" />
          <TravelTypes img="./images/surf.svg" title="praia" />
          <TravelTypes img="./images/building.svg" title="moderno" />
          <TravelTypes img="./images/museum.svg" title="clássico" />
          <TravelTypes img="./images/earth.svg" title="e mais..." />
        </Wrap>
        <Flex flex="1" justify="center">
          <Divider
            borderBottom="none"
            border={["", "1px solid"]}
            width={["60px", "90px"]}
            opacity={1}
            borderColor="#47585B"
          />
        </Flex>
        <Flex
          as="section"
          direction="column"
          flex="1"
          alignItems="center"
          mt={["24px", "52px"]}
        >
          <Text textAlign="center" fontWeight="medium" fontSize={[20, 36]}>
            Vamos nessa? <br /> Então escolha seu continente
          </Text>
          <Flex
            width="100%"
            maxWidth="1240px"
            mb={["24px", "40px"]}
            mt={["20px", "52px"]}
            justify="center"
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <Slide
                  url="europa"
                  img="./images/europa.png"
                  title="Europa"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  url="americadonorte"
                  img="./images/americadonorte.jpg"
                  title="América do Norte"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  url="americadosul"
                  img="./images/americadosul.jpg"
                  title="América do Sul"
                  subtitle=" a maior biodiversidade do mundo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  url="asia"
                  img="./images/asia.jpg"
                  title="Ásia"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  url="africa"
                  img="./images/africa.jpg"
                  title="África"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  url="oceania"
                  img="./images/oceania.jpg"
                  title="Oceania"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
