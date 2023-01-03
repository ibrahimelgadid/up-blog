import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  // Image,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
import Logo from "../components/Logo";
import Image from "next/image";

export default function LandingPage() {
  const [maxLargeMedia] = useMediaQuery("(max-width: 992px)");

  return (
    <>
      <Head>
        <title>Welcome to UP Blog</title>
      </Head>
      <Flex w={"full"} bgImg={"/landing-bg.webp"} minH={"100dvh"}>
        <Box
          as={"span"}
          position={"absolute"}
          inset={"0"}
          bg={"linkedin.900"}
          opacity={"0.4"}
        />
        <Container maxW={"6xl"} isolation={"isolate"}>
          <HStack as={"header"} w={"full"} h={"50px"}>
            <Logo textColor />
            <HStack w={"90%"} justifyContent={"flex-end"}>
              <Button
                as={NextLink}
                variant={"solid"}
                href={"/signup"}
                size={"sm"}
                px={"1rem"}
              >
                create account
              </Button>
              <Button
                as={NextLink}
                variant={"solid"}
                href={"/login"}
                colorScheme={"messenger"}
                size={"sm"}
                px={"1.5rem"}
              >
                login
              </Button>
            </HStack>
          </HStack>
          {!maxLargeMedia && (
            <>
              <HStack position={"absolute"} bottom={"35px"} right={"90px"}>
                <Image
                  width={350}
                  height={350}
                  src="/undraw_content_creator_re_pt5b.svg"
                  alt="ilistration-1"
                />
              </HStack>

              <HStack position={"absolute"} bottom={"65px"} left={"30px"}>
                <Image
                  width={350}
                  height={300}
                  src="/silky-journalism.png"
                  alt="ilistration-1"
                />
              </HStack>
            </>
          )}
          <VStack>
            <Heading
              maxW={maxLargeMedia ? "auto" : "75%"}
              textColor={"white"}
              textAlign={"center"}
              mt={"4rem"}
              mb={"1rem"}
              textTransform={"uppercase"}
            >
              Let&apos;s start the digital transformation let&apos;s make the
              world better Knowlage with
              <Text display={"inline"} color={"messenger.400"} px={"0.6rem"}>
                UP
              </Text>
            </Heading>
            <Text
              maxW={maxLargeMedia ? "95%" : "65%"}
              textColor={"gray.400"}
              textAlign={"center"}
              mb={"4rem"}
              textTransform={"capitalize"}
              fontSize={"sm"}
            >
              It will be your favorite place to create leaflets about your
              experience with the things that you prefer between your colleagues
              and the latest sincere news, to create your blogs in an
              interactive society that loves to know and advise that it is your
              favorite blog to contain your blogs with the flavor of social
              networking sites. What are you waiting for! Let&apos;s go
            </Text>
            <HStack paddingTop={"2rem"} w={"full"}>
              <Button
                as={NextLink}
                href={"/signup"}
                textTransform={"uppercase"}
                px={"3rem"}
                mx={"auto"}
                width={maxLargeMedia ? "100%" : "auto"}
              >
                Let&apos;s join now
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Flex>
    </>
  );
}
