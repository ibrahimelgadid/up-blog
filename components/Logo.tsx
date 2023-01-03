import React from "react";
import { Flex, VStack, Text, Image } from "@chakra-ui/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

function Logo({ textColor }: { textColor?: boolean }) {
  return (
    <VStack
      maxW={"95px"}
      paddingInline={"0.7rem"}
      paddingBlock={"0.1rem"}
      borderRadius={"50%"}
      alignItems={"flex-start"}
    >
      <ArrowTrendingUpIcon
        width={"1.5rem"}
        color={textColor ? "#11b0e0" : "#0014FF"}
        fontWeight={"bold"}
      />

      <Text
        fontSize={"xl"}
        lineHeight={"18px"}
        textTransform={"uppercase"}
        color={textColor ? "white" : "black"}
        mt={"0px !important"}
        fontWeight={"bold"}
      >
        UP
      </Text>
    </VStack>
  );
}

export default Logo;
