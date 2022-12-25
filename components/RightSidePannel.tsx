import { Flex, Text, VStack } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { IFrindRequist } from "../lib/interfaces/iApp";
import FriendsRequestsList from "./FriendsRequestsList";
import UserAccountSummary from "./UserAccountSummary";

function RightSidePannel() {
  const friendRequestDataSource: IFrindRequist[] = [
    {
      key: nanoid(4),
      avatar: "https://picsum.photos/155.webp",
      elapsedTime: "25 minutes",
      firstName: "John",
      lastName: "Doe",
      isAccepted: false,
    },
    {
      key: nanoid(4),
      avatar: "https://picsum.photos/154.webp",
      elapsedTime: "12 minutes",
      firstName: "John",
      lastName: "Doe 2",
      isAccepted: true,
    },
    {
      key: nanoid(4),
      avatar: "https://picsum.photos/156.webp",
      elapsedTime: "03 minutes",
      firstName: "John",
      lastName: "Doe 3",
      isAccepted: false,
    },
    {
      key: nanoid(4),
      avatar: "https://picsum.photos/157.webp",
      elapsedTime: "52 minutes",
      firstName: "John",
      lastName: "Doe 4",
      isAccepted: false,
    },
    {
      key: nanoid(4),
      avatar: "https://picsum.photos/158.webp",
      elapsedTime: "46 minutes",
      firstName: "John",
      lastName: "Doe 5",
      isAccepted: false,
    },
    {
      key: nanoid(4),
      avatar: "https://picsum.photos/159.webp",
      elapsedTime: "32 minutes",
      firstName: "John ",
      lastName: "Doe 6",
      isAccepted: false,
    },
    {
      key: nanoid(4),
      avatar: "https://picsum.photos/159.webp",
      elapsedTime: "32 minutes",
      firstName: "John ",
      lastName: "Doe 6",
      isAccepted: false,
    },
  ];
  return (
    <VStack
      as={"div"}
      width={"22%"}
      height={"95%"}
      justify={"space-between"}
      borderRadius={"md"}
      padding={"0.5rem"}
      mt={"0.5rem"}
      overflowY={"hidden"}
    >
      <UserAccountSummary
        userData={{
          avatar: "https://picsum.photos/151.webp",
          firstName: "ahmed",
          lastName: "shehata",
          username: "ahmed98",
          posts: "104",
          followers: "202K",
          following: "2K",
          isOnline: true,
          profileCoverImg: "https://picsum.photos/409.webp",
        }}
      />
      <Flex
        direction={"column"}
        width={"100%"}
        height={"40%"}
        padding={"0.5rem"}
        bg={"white"}
        border={"1px solid"}
        borderColor={"gray.300"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color="InactiveCaptionText"
          mr={"auto"}
        >
          Friends Requist
        </Text>
        <FriendsRequestsList friendsRequestsData={friendRequestDataSource} />
      </Flex>
    </VStack>
  );
}

export default RightSidePannel;
