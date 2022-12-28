import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IFriendsRequestsListProps } from "../lib/interfaces/IRightSidePannel";

function FriendsRequestsList({
  friendsRequestsData,
}: IFriendsRequestsListProps) {
  return (
    <VStack
      w={"100%"}
      h={"90%"}
      maxH={"90%"}
      overflowY={"auto"}
      borderRadius={"sm"}
    >
      <Flex as={"ul"} w={"100%"} flexDirection={"column"} justify="flex-start">
        {Array.isArray(friendsRequestsData) &&
          friendsRequestsData.map(
            ({ key, avatar, firstName, lastName, isAccepted, elapsedTime }) => (
              <Flex
                key={key}
                as={"li"}
                flexDirection={"column"}
                w={"100%"}
                justify="flex-start"
              >
                <HStack>
                  <Button
                    type="button"
                    variant={"ghost"}
                    leftIcon={
                      <Avatar
                        size={"sm"}
                        src={avatar}
                        name={`${firstName} ${lastName}`}
                      />
                    }
                    w={"100%"}
                    justifyContent={"flex-start"}
                    alignItems={"center"}
                    textTransform={"capitalize"}
                    paddingInline={"0.5rem"}
                  >
                    <VStack
                      h={"full"}
                      justify={"flex-start"}
                      alignItems={"flex-start"}
                      gap={"2px"}
                      marginInlineEnd={"auto"}
                    >
                      <Text
                        fontWeight={"normal"}
                        fontSize={"sm"}
                        marginTop={"0px !important"}
                      >
                        {firstName} {lastName}
                      </Text>
                      <Text
                        marginTop={"0px !important"}
                        fontSize={"sm"}
                        color={"gray.500"}
                      >
                        {elapsedTime}
                      </Text>
                    </VStack>
                  </Button>
                  <Button
                    width={"30px"}
                    height={"30px"}
                    padding={"4px"}
                    borderRadius={"6px"}
                    variant={"link"}
                  >
                    {isAccepted ? (
                      <i
                        className="fi fi-sr-checkbox"
                        style={{ lineHeight: "14px", color: "#6B46C1" }}
                      ></i>
                    ) : (
                      <i
                        className="fi fi-sr-user-add"
                        style={{ lineHeight: "14px", color: "#6B46C1" }}
                      ></i>
                    )}
                  </Button>
                </HStack>
                <Divider />
              </Flex>
            )
          )}
      </Flex>
    </VStack>
  );
}

export default FriendsRequestsList;
