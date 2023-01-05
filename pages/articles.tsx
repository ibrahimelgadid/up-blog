import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import Head from "next/head";
import React from "react";
import ArticleCard from "../components/ArticleCard";
import { IArticleCardData } from "../lib/interfaces/IArticles";

const articles = () => {
  const articlesDataList: IArticleCardData[] = [
    {
      id: nanoid(4),

      media: "https://picsum.photos/800.webp",
      title: "article title will be displayed here",
      puplishAt: "2022-12-28T10:53:20.767Z",
      timeStamp: "14 minutes ago",
      articleContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aliquam culpa dolores, at temporibus ad voluptatem, maxime error dicta eaque ipsum sequi ipsa recusandae dolorem debitis, similique voluptatum maiores et.",
      articleDescribtion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aliquam culpa dolores, at temporibus ad voluptatem",
      userPublisher: {
        avatar: "https://picsum.photos/90.webp",
        firstName: "John",
        lastName: "Doe",
      },
      supportCount: "353,022 K",
    },
    {
      id: nanoid(4),

      media: "https://picsum.photos/801.webp",
      title: "article title will be displayed here",
      puplishAt: "2022-12-28T10:53:20.767Z",
      timeStamp: "14 minutes ago",
      articleContent:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aliquam culpa dolores,  dolorem debitis, similique voluptatum maiores et.",
      articleDescribtion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aliquam culpa dolores, at temporibus ad voluptatem",
      userPublisher: {
        avatar: "https://picsum.photos/91.webp",
        firstName: "John",
        lastName: "Doe",
      },
      supportCount: "802 ",
    },
    {
      id: nanoid(4),

      media: "https://picsum.photos/802.webp",
      title: "article title will be displayed here",
      puplishAt: "2022-12-28T10:53:20.767Z",
      timeStamp: "14 minutes ago",
      articleContent:
        "Lorem ipsum, dolor sit amet cons dolores, at temporibus ad voluptatem, maxime error dicta eaque ipsum sequi ipsa recusandae dolorem debitis, similique voluptatum maiores et.",
      articleDescribtion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aliquam culpa dolores, at temporibus ad voluptatem",
      userPublisher: {
        avatar: "https://picsum.photos/92.webp",
        firstName: "John",
        lastName: "Doe",
      },
      supportCount: "2,872 K",
    },
    {
      id: nanoid(4),
      media: "https://picsum.photos/803.webp",
      title: "article title will be displayed here",
      puplishAt: "2022-12-28T10:53:20.767Z",
      timeStamp: "14 minutes ago",
      articleContent:
        "Lorem ipsum, dolor sit amet consectetur adDoloribus aliquam culpa dolores, at temporibus ad voluptatem, maxime error dicta eaque ipsum sequi ipsa recusandae dolorem debitis, similique voluptatum maiores et.",
      articleDescribtion:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus aliquam culpa dolores, at temporibus ad voluptatem",
      userPublisher: {
        avatar: "https://picsum.photos/93.webp",
        firstName: "John",
        lastName: "Doe",
      },
      supportCount: "23,802 K",
    },
  ];
  console.log(articlesDataList);
  return (
    <>
      <Head>
        <title>articles</title>
      </Head>
      <Flex as={"main"} w={"60%"} marginInline={"auto"}>
        <UnorderedList
          paddingBlock={"1rem"}
          listStyleType={"none"}
          height={"91dvh"}
          minHeight={"91dvh"}
          overflowY={"auto"}
        >
          {Array.isArray(articlesDataList) &&
            articlesDataList.map((article) => (
              <ListItem key={nanoid(8)} mb={"1rem"} marginInlineEnd={"1rem"}>
                <ArticleCard ArticleCardData={article} />
              </ListItem>
            ))}
        </UnorderedList>
      </Flex>
    </>
  );
};

export default articles;
