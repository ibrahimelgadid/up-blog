import {
  AspectRatio,
  Avatar,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IArticleCardProps } from "../lib/interfaces/IArticles";

function ArticleCard({ ArticleCardData }: IArticleCardProps) {
  return (
    <VStack
      as={Link}
      href={`/articles/${ArticleCardData?.id}`}
      bg={"white"}
      border={"1px solid"}
      borderColor={"chakra-border-color"}
      shadow={"sm"}
      alignItems={"flex-start"}
      padding={"1rem"}
    >
      <AspectRatio as={"figure"} w={"100%"} h={"310px"} ratio={16 / 12}>
        <Image
          src={ArticleCardData?.media}
          alt={"article-img"}
          objectFit={"cover"}
          w={"full"}
          borderRadius={"md"}
        />
      </AspectRatio>
      <VStack
        alignItems={"flex-start"}
        justifyContent={"center"}
        w={"80%"}
        padding={"0.5rem"}
      >
        <VStack
          as={"figcaption"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          w={"100%"}
        >
          <Heading
            fontSize={"xl"}
            fontWeight={"semibold"}
            textTransform={"capitalize"}
          >
            {ArticleCardData?.title}
          </Heading>
          <HStack spacing={"0.5rem"} mb={"1rem"}>
            <HStack>
              <Avatar
                src={ArticleCardData?.userPublisher?.avatar}
                name={`${ArticleCardData?.userPublisher?.firstName} ${ArticleCardData?.userPublisher?.lastName}`}
              ></Avatar>
            </HStack>
            <VStack alignItems={"flex-start"} spacing={"0.5rem"}>
              <Text
                fontWeight={"medium"}
                fontSize={"sm"}
                textTransform={"uppercase"}
                mb={"0px !important"}
              >
                {ArticleCardData?.userPublisher?.firstName}{" "}
                {ArticleCardData?.userPublisher?.lastName}
              </Text>
              <HStack spacing={"1rem"} mt={"0px !important"}>
                <Text fontSize={"sm"} textColor={"InactiveCaptionText"}>
                  {ArticleCardData?.puplishAt}
                </Text>
                <Text fontSize={"sm"} textColor={"InactiveCaptionText"}>
                  {ArticleCardData?.timeStamp}
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </VStack>
        <VStack>
          <Text>{ArticleCardData?.articleDescribtion}</Text>
        </VStack>
      </VStack>
    </VStack>
  );
}

export default ArticleCard;
