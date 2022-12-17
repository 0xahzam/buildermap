import Head from "next/head";
import { Flex, Text, Button, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Builder Map</title>
        <meta name="description" content="Builder Map" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/map-pin.svg" />
      </Head>

      <Flex
        height={"100vh"}
        backgroundImage={"background.png"}
        backgroundColor={"#020204"}
        backgroundSize={"cover"}
        fontFamily={"Inter, sans-serif"}
        color={"white"}
        flexDir={"column"}
      >
        <Flex
          justifyContent={"space-between"}
          width={"100vw"}
          paddingRight={{ base: "20px", md: "100px" }}
          paddingLeft={{ base: "20px", md: "100px" }}
          paddingTop={"32px"}
        >
          <Image
            src={"map-pin.svg"}
            alt={"logo"}
            height={{ base: "20px", md: "27px" }}
            width={{ base: "20px", md: "27px" }}
          />

          <Flex gap={{ base: "20px", md: "30px" }}>
            <Text
              fontSize={{ base: "16px", md: "19px" }}
              fontwWeight={"normal"}
              opacity={"80%"}
            >
              Twitter
            </Text>
            <Text
              fontSize={{ base: "16px", md: "19px" }}
              fontwWeight={"normal"}
              opacity={"80%"}
            >
              Know More
            </Text>
          </Flex>
        </Flex>

        <Flex marginTop={"160px"} align={"center"} flexDir={"column"}>
          <Button
            borderRadius={"100px"}
            width={{ base: "140px", md: "198px" }}
            padding={"10px,16px"}
            backgroundColor={"rgba(255, 255, 255, 0.1)"}
            border={"1px solid rgba(255, 255, 255, 0.3)"}
            fontSize={{ base: "14px", md: "20px" }}
            fontWeight={"normal"}
            color={"rgba(255, 255, 255, 0.6)"}
            _hover={{ background: "" }}
          >
            Check out demo
          </Button>

          <Text
            className="text"
            marginTop={"14px"}
            fontSize={{ base: "34px", md: "74px" }}
            fontWeight={"semibold"}
            width={{ base: "379px", md: "904px" }}
            textAlign={"center"}
          >
            Bringing communities and builders closer.
          </Text>

          <Flex gap={"16px"} marginTop={{ base: "45px", md: "85px" }}>
            <Button
              background={"white"}
              color={"black"}
              borderRadius={"7px"}
              width={{ base: "120px", md: "182px" }}
              height={{ base: "45px", md: "59px" }}
              fontSize={{ base: "19px", md: "24px" }}
              fontWeight={"medium"}
              _hover={{ background: "" }}
            >
              Try Now
            </Button>
            <Button
              background={"none"}
              color={"white"}
              borderRadius={"7px"}
              width={{ base: "120px", md: "182px" }}
              height={{ base: "45px", md: "59px" }}
              fontSize={{ base: "19px", md: "24px" }}
              fontWeight={"medium"}
              border={"1px solid white"}
              _hover={{ background: "" }}
            >
              Learn More
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
