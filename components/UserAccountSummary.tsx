import { EditIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Flex,
  VStack,
  Image,
  Text,
  HStack,
  Divider,
  CardFooter,
  Button,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { IUserAccountSummaryProps } from "../lib/interfaces/IRightSidePannel";

function UserAccountSummary({
  userData,
  currentPage,
}: IUserAccountSummaryProps) {
  return (
    <Card w={"full"} height={"60%"} borderRadius={"sm"}>
      <CardBody>
        <Flex
          position={"relative"}
          height={"50%"}
          backgroundImage={`url(${userData.profileCoverImg})`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          mb={"2rem"}
          borderRadius={"md"}
        >
          <VStack
            padding={"4px"}
            bg={"white"}
            position={"absolute"}
            bottom={"-30px"}
            left={"50%"}
            transform={"auto-gpu"}
            translateX={"-50%"}
            borderRadius={"50%"}
            overflow={"hidden"}
          >
            <Avatar
              size={"xl"}
              src={userData?.avatar}
              name={`${userData?.firstName} ${userData?.lastName}`}
            />
          </VStack>
        </Flex>
        <VStack justify={"center"} gap={"1px"}>
          <Text
            fontWeight={"bold"}
            textTransform={"capitalize"}
            fontSize={"sm"}
          >
            {userData.firstName} {userData.lastName}
          </Text>
          <Text
            fontWeight={"bold"}
            textTransform={"capitalize"}
            fontSize={"sm"}
            color={"InactiveCaptionText"}
            marginTop={"0px !important"}
          >
            @{userData.username}
          </Text>
        </VStack>
        <Divider my={"0.3rem"} />
        <HStack justify={"space-between"} alignItems={"center"} gap={"8px"}>
          <VStack>
            <Text fontSize={"lg"} fontWeight={"bold"} lineHeight={"15px"}>
              {userData?.followers}
            </Text>
            <Text
              fontSize={"sm"}
              color={"gray.600"}
              lineHeight={"15px"}
              textTransform={"capitalize"}
            >
              followers
            </Text>
          </VStack>
          <VStack justify={"center"} alignItems={"center"}>
            <Text fontSize={"lg"} fontWeight={"bold"} lineHeight={"15px"}>
              {userData.posts}
            </Text>
            <Text
              fontSize={"sm"}
              color={"gray.600"}
              lineHeight={"15px"}
              textTransform={"capitalize"}
            >
              posts
            </Text>
          </VStack>
          <VStack>
            <Text fontSize={"lg"} fontWeight={"bold"} lineHeight={"15px"}>
              {userData?.following}
            </Text>
            <Text
              fontSize={"sm"}
              color={"gray.600"}
              lineHeight={"15px"}
              textTransform={"capitalize"}
            >
              following
            </Text>
          </VStack>
        </HStack>
      </CardBody>
      <CardFooter paddingTop={"0.5rem"}>
        {currentPage !== "/articles" ? (
          <Button
            leftIcon={<EditIcon />}
            inlineSize={"full"}
            variant={"solid"}
            size={"md"}
            borderRadius={"md"}
            colorScheme={"messenger"}
          >
            create a post
          </Button>
        ) : (
          <Button
            leftIcon={<EditIcon />}
            inlineSize={"full"}
            variant={"solid"}
            size={"md"}
            borderRadius={"md"}
            colorScheme={"cyan"}
          >
            create an article
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default UserAccountSummary;
