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
import { IWritersPeopleListData } from "../lib/interfaces/ILeftSidePannel";
import SideWritersList from "./SideWritersList";

function LeftSidePannel() {
  const sideFaviourSourceData: IWritersPeopleListData[] = [
    {
      key: nanoid(6),
      name: "john doe 1",
      image: "https://picsum.photos/151.webp",
      articlesCount: 40,
    },
    {
      key: nanoid(6),
      name: "john doe 2",
      image: "https://picsum.photos/152.webp",
      articlesCount: 120,
    },
    {
      key: nanoid(6),
      name: "john doe 3",
      image: "https://picsum.photos/153.webp",
      articlesCount: 1370,
    },
    {
      key: nanoid(6),
      name: "john doe 4",
      image: "https://picsum.photos/154.webp",
      articlesCount: 5,
    },
    {
      key: nanoid(6),
      name: "john doe 5",
      image: "https://picsum.photos/155.webp",
      articlesCount: 263,
    },
  ];
  return (
    <Box
      position={"fixed"}
      top={"53px"}
      left={"0px"}
      as="aside"
      width={"22%"}
      height={"89%"}
      borderRadius={"sm"}
      bg={"white"}
      padding={"0.5rem"}
      overflowY={"hidden"}
      borderInline={"1px solid"}
      borderColor={"gray.300"}
    >
      <Flex flexDirection={"column"}>
        <InputGroup>
          <InputLeftElement
            pointerEvents={"none"}
            children={<Search2Icon fontSize={"sm"} />}
          />
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
        maxHeight={"100%"}
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
          paddingLeft={"5px"}
        >
          most popular writers
        </Text>
        <SideWritersList writerPeopleListData={sideFaviourSourceData} />
      </Flex>
    </Box>
  );
}

export default LeftSidePannel;
