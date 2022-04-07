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

import Header from "../components/Header";
import Slide from "../components/Slide";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" height="100hv">
      <Header />
      <Flex direction="column" w="100%" maxWidth={1440} mx="auto">
        <Flex>
          <Box
            flex="1"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            paddingX={["16px", "80px"]}
            height={["163px", "210px", "335px"]}
            backgroundImage={`url("/images/Background-banner.jpg")`}
            backgroundPosition="center 25%"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
          >
            <Flex direction="column">
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
              <Image
                height={290}
                width={431}
                display="flex"
                justifyContent="flex-end"
                mt={90}
                right="80px"
                src="./images/Airplane.svg"
                alt="Avião"
              />
            )}
          </Box>
        </Flex>
        <Wrap
          as="section"
          justify="space-between"
          mx={["50px", "140px"]}
          my={["50px", "90px"]}
        >
          <TravelTypes img="./images/cocktail.svg" title="vida nortuna" />
          <TravelTypes img="./images/surf.svg" title="praia" />
          <TravelTypes img="./images/building.svg" title="moderno" />
          <TravelTypes img="./images/museum.svg" title="clássico" />
          <TravelTypes img="./images/earth.svg" title="e mais..." />
        </Wrap>
        <Flex flex="1" justify="center">
          <Divider
            border="2px solid "
            width="90px"
            opacity={1}
            borderColor="#47585B"
          />
        </Flex>
        <Flex
          as="section"
          direction="column"
          flex="1"
          alignItems="center"
          mt="52px"
        >
          <Text textAlign="center" fontWeight="medium" fontSize={[20, 36]}>
            Vamos nessa? <br /> Então escolha seu continente
          </Text>
          <Flex width="100%" mb="40px" mt="52px" justify="center">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              slidesPerView={1}
              navigation
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <Slide
                  img="./images/europa.png"
                  title="Europa"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  img="./images/americadonorte.jpg"
                  title="América do Norte"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  img="./images/americadosul.jpg"
                  title="América do Sul"
                  subtitle=" a maior biodiversidade do mundo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  img="./images/asia.jpg"
                  title="Ásia"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
                  img="./images/africa.jpg"
                  title="África"
                  subtitle="o continente mais antigo."
                />
              </SwiperSlide>
              <SwiperSlide>
                <Slide
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
