import {
  Avatar,
  Badge,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ISideWritersListProps } from "../lib/interfaces/ILeftSidePannel";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

function SideWritersList({ writerPeopleListData }: ISideWritersListProps) {
  return (
    <VStack w={"100%"} h={"100%"} maxH={"100%"} overflowY={"auto"}>
      <Text
        fontSize={"sm"}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color="InactiveCaptionText"
        mr={"auto"}
      ></Text>
      <Flex as={"ul"} w={"100%"} flexDirection={"column"} justify="flex-start">
        {Array.isArray(writerPeopleListData) &&
          writerPeopleListData.map(({ image, articlesCount, key, name }) => (
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
                leftIcon={<Avatar size={"sm"} src={image} name={name} />}
                rightIcon={
                  <Badge colorScheme={"facebook"}>{articlesCount}</Badge>
                }
                w={"100%"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                textTransform={"capitalize"}
                paddingInline={"0.5rem"}
                borderRadius={"sm"}
                colorScheme={"gray"}
              >
                <Text marginInlineEnd={"auto"} fontSize={"sm"}>
                  {name}
                </Text>
              </Button>
            </Flex>
          ))}
      </Flex>
    </VStack>
  );
}

export default SideWritersList;
