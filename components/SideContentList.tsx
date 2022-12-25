import { Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ISideContentListProps } from "../lib/interfaces/ILeftSidePannel";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

function SideContentList({
  SideFaviouritesPeopleListData,
}: ISideContentListProps) {
  return (
    <VStack w={"100%"} h={"10%"} maxH={"10%"} overflowY={"auto"}>
      <Text
        fontSize={"sm"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color="InactiveCaptionText"
        mr={"auto"}
      ></Text>
      <Flex as={"ul"} w={"100%"} flexDirection={"column"} justify="flex-start">
        {Array.isArray(SideFaviouritesPeopleListData) &&
          SideFaviouritesPeopleListData.map(
            ({ image, isFavourite, key, name }) => (
              <Flex
                key={key}
                as={"li"}
                flexDirection={"column"}
                w={"100%"}
                justify="flex-start"
              >
                <Button
                  type="button"
                  variant={"ghost"}
                  leftIcon={
                    <Image
                      src={image}
                      alt="fav-people-usr"
                      w={"30px"}
                      borderRadius={"50%"}
                    />
                  }
                  rightIcon={
                    <>
                      {isFavourite ? (
                        <HeartIconSolid width={"20px"} color={"#0052AC"} />
                      ) : (
                        <HeartIcon width={"20px"} color="#0052AC" />
                      )}
                    </>
                  }
                  w={"100%"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  textTransform={"capitalize"}
                  paddingInline={"0.5rem"}
                >
                  <Text marginInlineEnd={"auto"} fontSize={"sm"}>
                    {name}
                  </Text>
                </Button>
              </Flex>
            )
          )}
      </Flex>
    </VStack>
  );
}

export default SideContentList;
