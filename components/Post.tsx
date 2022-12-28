import { useState } from "react";
import {
  Avatar,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  AspectRatio,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { IPostProps } from "../lib/interfaces/IPost";
import {
  ArrowUpIcon,
  ShareIcon,
  ChatBubbleLeftEllipsisIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

function Post({ postData }: IPostProps) {
  const [showMoreTextContent, setShowMoreTextContent] = useState(false);

  const handleShowMoreTextContent = () =>
    setShowMoreTextContent((current) => !current);
  return (
    <Flex
      w={"100%"}
      direction={"column"}
      bg={"white"}
      shadow={"md"}
      mb={"1rem"}
      borderRadius={"sm"}
    >
      <HStack
        height={"fit-content"}
        paddingInline={"1rem"}
        paddingBlockStart={"0.5rem"}
        paddingBlockEnd={"0.3rem"}
        bg={"white"}
        borderBottom={"1px solid"}
        borderColor={"gray.200"}
      >
        <Avatar
          size={"md"}
          name="johne Doe"
          src="https://picsum.photos/141.webp"
        />
        <VStack alignItems={"flex-start"}>
          <HStack>
            <Link
              as={NextLink}
              href="#"
              lineHeight={"14px"}
              fontWeight={"semibold"}
              fontSize={"sm"}
              textTransform={"capitalize"}
            >
              {postData?.firstName} {postData?.lastName}
            </Link>
            <Button variant={"ghost"} size={"xs"} colorScheme={"messenger"}>
              follow
            </Button>
          </HStack>
          <Text
            lineHeight={"16px"}
            marginTop={"0px !important"}
            fontSize={"xs"}
            color={"GrayText"}
            textTransform={"capitalize"}
          >
            {postData?.bio}
          </Text>
        </VStack>
        <VStack marginLeft={"auto !important"}>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<EllipsisVerticalIcon width={"20px"} />}
              borderRadius={"50%"}
            />
            <MenuList>
              <MenuItem>i dont need see this</MenuItem>
              <MenuItem>save</MenuItem>
              <MenuItem>report</MenuItem>
            </MenuList>
          </Menu>
        </VStack>
      </HStack>
      <VStack paddingInline={"1rem"} paddingBlock={"0.5rem"} bg={"whitesmoke"}>
        <Text noOfLines={showMoreTextContent ? undefined : 2}>
          {postData?.postContent}
        </Text>
        <Button
          size={"sm"}
          variant={"link"}
          alignSelf={"flex-end"}
          onClick={handleShowMoreTextContent}
        >
          more
        </Button>
      </VStack>
      {postData?.postMedia !== null && (
        <VStack>
          <AspectRatio w={"100%"} h={"320px"} ratio={16 / 9}>
            <Image
              src={postData?.postMedia}
              alt="post-media"
              objectFit={"cover"}
            />
          </AspectRatio>
        </VStack>
      )}
      <Divider />
      <HStack
        alignItems={"center"}
        justify={"flex-start"}
        gap={"2px"}
        paddingInline={"1rem"}
        paddingBlock={"0.2rem"}
      >
        <Button
          variant={"ghost"}
          leftIcon={<ArrowUpIcon width={"17px"} />}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          textTransform={"uppercase"}
          fontSize={"xs"}
          size={"sm"}
          borderRadius={"sm"}
          colorScheme={"messenger"}
        >
          {postData?.upCount}
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<ChatBubbleLeftEllipsisIcon width={"17px"} />}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          textTransform={"uppercase"}
          fontSize={"xs"}
          size={"sm"}
          borderRadius={"sm"}
          colorScheme={"messenger"}
        >
          {postData?.comments?.length}
        </Button>
        <Button
          variant={"ghost"}
          leftIcon={<ShareIcon width={"17px"} />}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          textTransform={"uppercase"}
          size={"sm"}
          fontSize={"xs"}
          borderRadius={"sm"}
          colorScheme={"messenger"}
        >
          {postData?.shearCount}
        </Button>
      </HStack>
      <Divider />
    </Flex>
  );
}

export default Post;
