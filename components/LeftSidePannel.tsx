import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { IFaviouritesPeopleListData } from "../lib/interfaces/ILeftSidePannel";
import SideContentList from "./SideContentList";

function LeftSidePannel() {
  const sideFaviourSourceData: IFaviouritesPeopleListData[] = [
    {
      key: nanoid(6),
      name: "john doe 1",
      image: "https://picsum.photos/151.webp",
      isFavourite: false,
    },
    {
      key: nanoid(6),
      name: "john doe 2",
      image: "https://picsum.photos/152.webp",
      isFavourite: false,
    },
    {
      key: nanoid(6),
      name: "john doe 3",
      image: "https://picsum.photos/153.webp",
      isFavourite: true,
    },
    {
      key: nanoid(6),
      name: "john doe 4",
      image: "https://picsum.photos/154.webp",
      isFavourite: false,
    },
    {
      key: nanoid(6),
      name: "john doe 5",
      image: "https://picsum.photos/155.webp",
      isFavourite: false,
    },
  ];
  return (
    <Box
      as="aside"
      width={"22%"}
      height={"95%"}
      borderRadius={"sm"}
      bg={"white"}
      padding={"0.5rem"}
      mt={"1rem"}
      overflowY={"hidden"}
      border={"1px solid"}
      borderColor={"gray.300"}
    >
      <Flex flexDirection={"column"}>
        <InputGroup>
          <InputLeftElement pointerEvents={"none"} children={<Search2Icon />} />
          <Input
            type="search"
            placeholder="search people or group .."
            variant={"filled"}
            borderRadius={"sm"}
          />
        </InputGroup>
      </Flex>
      <Flex
        mt={"1rem"}
        flexDirection={"column"}
        maxHeight={"30%"}
        overflowY={"auto"}
        scrollBehavior={"smooth"}
        scrollSnapType={"y"}
        scrollSnapAlign={"start"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color="InactiveCaptionText"
          mr={"auto"}
        >
          favorites peoples
        </Text>
        <SideContentList
          SideFaviouritesPeopleListData={sideFaviourSourceData}
        />
      </Flex>
      <Flex
        mt={"1rem"}
        flexDirection={"column"}
        maxHeight={"25%"}
        overflowY={"auto"}
        scrollBehavior={"smooth"}
        scrollSnapType={"y"}
        scrollSnapAlign={"start"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color="InactiveCaptionText"
          mr={"auto"}
        >
          community
        </Text>
        <SideContentList
          SideFaviouritesPeopleListData={sideFaviourSourceData}
        />
      </Flex>
      <Flex
        mt={"1rem"}
        flexDirection={"column"}
        maxHeight={"30%"}
        overflowY={"auto"}
        scrollBehavior={"smooth"}
        scrollSnapType={"y"}
        scrollSnapAlign={"start"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color="InactiveCaptionText"
          mr={"auto"}
        >
          following
        </Text>
        <SideContentList
          SideFaviouritesPeopleListData={sideFaviourSourceData}
        />
      </Flex>
    </Box>
  );
}

export default LeftSidePannel;
