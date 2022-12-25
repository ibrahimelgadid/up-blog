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
} from "@chakra-ui/react";
import React from "react";
import { IUserAccountSummaryProps } from "../lib/interfaces/IRightSidePannel";

function UserAccountSummary({ userData }: IUserAccountSummaryProps) {
  return (
    <Card w={"full"} height={"60%"} bg={"white"} borderRadius={"sm"}>
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
            borderRadius={"lg"}
            overflow={"hidden"}
          >
            <Image
              src={userData.avatar}
              alt="user-img"
              width={"80px"}
              height={"80px"}
              borderRadius={"lg"}
              overflow={"hidden"}
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
        <Button
          leftIcon={<EditIcon />}
          inlineSize={"full"}
          variant={"solid"}
          size={"sm"}
          colorScheme={"messenger"}
        >
          create as post
        </Button>
      </CardFooter>
    </Card>
  );
}

export default UserAccountSummary;
