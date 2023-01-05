import {
  MagnifyingGlassIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { FunnelIcon, TrophyIcon } from "@heroicons/react/24/outline";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import {
  ITopArticlesRadioOptions,
  ITopSubjectsRadioOptions,
  IWritersPeopleListData,
} from "../lib/interfaces/ILeftSidePannel";
import SideWritersList from "./SideWritersList";
import { useRouter } from "next/router";
export const filterTopArticlesOptions: ITopArticlesRadioOptions[] = [
  {
    radioItem: {
      label: "all articles",
      value: "all-articles",
      checked: true,
    },
  },
  {
    radioItem: {
      label: "most articles",
      value: "most-articles ",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "last published",
      value: "last-published",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "form A - Z",
      value: "A-Z ",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "from Z - A",
      value: "A-Z",
      checked: false,
    },
  },
];
export const filterTopSubjectOptions: ITopSubjectsRadioOptions[] = [
  {
    radioItem: {
      label: "all",
      value: "all ",
      checked: true,
    },
  },
  {
    radioItem: {
      label: "sports",
      value: "sports ",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "Policy",
      value: "Policy ",
      checked: false,
    },
  },

  {
    radioItem: {
      label: "Finance and business",
      value: "Finance-and-business",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "Software development",
      value: "Software development",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "life style",
      value: "life-style ",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "health",
      value: "health",
      checked: false,
    },
  },
  {
    radioItem: {
      label: "travel",
      value: "travel",
      checked: false,
    },
  },
];

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

  const [selectedArticlesFilter, setSelectedArticlesFilter] =
    useState<string>("all-articles");
  const [selectedTopSubjectFilter, setSelectedTopSubjectFilter] =
    useState<string>("all");
  const router = useRouter();
  const dontShowInRoutes = router.pathname === "/articles";
  const isArticlesRoute = router.pathname === "/articles";

  const handleSortArticles = (
    categoryVal: string,
    name: "sortArticles" | "topSubjects"
  ) => {
    if (name === "sortArticles") {
      setSelectedArticlesFilter(categoryVal);
    } else {
      setSelectedTopSubjectFilter(categoryVal);
    }
  };

  return (
    <Box
      position={"fixed"}
      top={"53px"}
      left={"0px"}
      zIndex={"banner"}
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
          <InputLeftElement pointerEvents={"none"}>
            <MagnifyingGlassIcon width={"20px"} color="gray.500" />
          </InputLeftElement>
          <Input
            type="search"
            placeholder="search people or group .."
            variant={"filled"}
            borderRadius={"sm"}
          />
        </InputGroup>
      </Flex>
      {!dontShowInRoutes && (
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
      )}
      {isArticlesRoute && (
        <>
          <VStack alignItems={"flex-start"} mt={"1rem"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"0.5rem"}
              mt={"0.5rem"}
            >
              <ChevronRightIcon width={"16px"} color="gray.500" />
              <Text fontWeight={"semibold"} textTransform={"uppercase"}>
                filter articles
              </Text>
              <TrophyIcon width={"16px"} color="gray.500" />
            </Box>
            <RadioGroup
              paddingInlineStart={"1rem"}
              display={"flex"}
              name={"sortArticles"}
              flexDirection={"column"}
              onChange={(categoryVal) =>
                handleSortArticles(categoryVal, "sortArticles")
              }
              value={selectedArticlesFilter}
            >
              {Array.isArray(filterTopArticlesOptions) &&
                filterTopArticlesOptions.map((option) => (
                  <Radio
                    key={nanoid(8)}
                    colorScheme={"messenger"}
                    value={option.radioItem.value}
                  >
                    <Text textTransform={"capitalize"}>
                      {option.radioItem.label}
                    </Text>
                  </Radio>
                ))}
            </RadioGroup>
          </VStack>
          <VStack alignItems={"flex-start"} mt={"1rem"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"0.5rem"}
              mt={"0.5rem"}
            >
              <ChevronRightIcon width={"16px"} color="gray.500" />
              <Text fontWeight={"semibold"} textTransform={"uppercase"}>
                top subjects
              </Text>
              <FunnelIcon width={"16px"} color="gray.500" />
            </Box>
            <RadioGroup
              paddingInlineStart={"1rem"}
              display={"flex"}
              flexDirection={"column"}
              onChange={(categoryVal) =>
                handleSortArticles(categoryVal, "topSubjects")
              }
              value={selectedTopSubjectFilter}
            >
              {Array.isArray(filterTopSubjectOptions) &&
                filterTopSubjectOptions.map((option) => (
                  <Radio
                    key={nanoid(8)}
                    colorScheme={"messenger"}
                    value={option.radioItem.label}
                  >
                    <Text textTransform={"capitalize"}>
                      {option.radioItem.label}
                    </Text>
                  </Radio>
                ))}
            </RadioGroup>
          </VStack>
        </>
      )}
    </Box>
  );
}

export default LeftSidePannel;
