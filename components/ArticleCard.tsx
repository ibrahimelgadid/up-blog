import {
  AspectRatio,
  Avatar,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BookmarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { IArticleCardProps } from "../lib/interfaces/IArticles";
import UPIconSVG from "./UPIconSVG";

function ArticleCard({ ArticleCardData }: IArticleCardProps) {
  return (
    <HStack
      as={Link}
      href={`/articles/${ArticleCardData?.id}`}
      bg={"white"}
      border={"1px solid"}
      borderColor={"chakra-border-color"}
      shadow={"md"}
      alignItems={"flex-start"}
      padding={"1rem"}
    >
      <AspectRatio as={"figure"} w={"286px"} ratio={20 / 18}>
        <Image
          src={ArticleCardData?.media}
          alt={"article-img"}
          objectFit={"cover"}
          w={"full"}
          borderRadius={"sm"}
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
        <HStack>
          <Button
            size={"sm"}
            variant={"ghost"}
            colorScheme={"blackAlpha"}
            type={"button"}
          >
            <UPIconSVG />
            {ArticleCardData?.supportCount}
          </Button>
          <Button size={"sm"} variant={"ghost"} colorScheme={"messenger"}>
            <BookmarkIcon width={"20px"} />
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default ArticleCard;
