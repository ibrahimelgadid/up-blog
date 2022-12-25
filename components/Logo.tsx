import React from "react";
import { Flex, VStack, Text } from "@chakra-ui/react";

import { ArrowUpIcon } from "@chakra-ui/icons";
function Logo() {
  return (
    <VStack maxW={"90px"} paddingInline={"1rem"}>
      <ArrowUpIcon textColor={"purple.500"} fontSize={"2xl"} />
      <Text
        fontSize={"xl"}
        lineHeight={"24px"}
        textTransform={"uppercase"}
        mt={"0px !important"}
      >
        UP
      </Text>
    </VStack>
  );
}

export default Logo;
