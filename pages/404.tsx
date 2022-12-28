import {
  Button,
  Flex,
  VStack,
  Image,
  AspectRatio,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";
import notfoundImage from "../public/404 Error-amico.svg";

const notFound = () => {
  return (
    <>
      <Head>
        <title>404 not founded</title>
      </Head>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <VStack>
          <VStack w={"60%"}>
            <Image as={NextImage} src={notfoundImage} alt={"404-image"} />
          </VStack>
          <Text maxW={"400px"} color={"blackAlpha.600"}>
            Perhaps something happened with the server, or that the page is not
            present or is under construction
          </Text>
          <Button
            as={NextLink}
            variant={"solid"}
            color={"messenger.500"}
            href={"/"}
          >
            back to home
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default notFound;
