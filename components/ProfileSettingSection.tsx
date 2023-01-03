import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  VStack,
  Avatar,
  Input,
  HStack,
} from "@chakra-ui/react";
import React from "react";

function ProfileSettingSection() {
  return (
    <Flex>
      <VStack as={"form"} width={"full"}>
        <FormControl
          width={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          bg={"white"}
          border={"1px solid"}
          borderColor={"chakra-border-color"}
          shadow={"sm"}
          p={"1rem"}
          my={"1rem"}
        >
          <FormLabel w={"fit-content"} mx={"auto"}>
            <Avatar
              src="https://picsum.photos/250"
              name="jone doe"
              size={"xl"}
            ></Avatar>
          </FormLabel>
          <Input
            w={"fit-content"}
            mx={"auto"}
            type={"file"}
            variant={"flushed"}
            size={"sm"}
          />
        </FormControl>
        <VStack
          width={"full"}
          bg={"white"}
          border={"1px solid"}
          borderColor={"chakra-border-color"}
          shadow={"sm"}
          p={"1rem"}
          mb={"0.5rem"}
        >
          <HStack w={"70%"}>
            <FormControl>
              <FormLabel>first name</FormLabel>
              <Input
                type={"text"}
                variant={"filled"}
                size={"sm"}
                placeholder="firstname"
              />
            </FormControl>
            <FormControl>
              <FormLabel>last name</FormLabel>
              <Input
                type={"text"}
                variant={"filled"}
                size={"sm"}
                placeholder="lastname"
              />
            </FormControl>
          </HStack>
          <HStack w={"70%"}>
            <FormControl w={"50%"}>
              <FormLabel>username</FormLabel>
              <Input
                type={"text"}
                variant={"filled"}
                size={"sm"}
                placeholder="username"
              />
            </FormControl>
          </HStack>
          <HStack w={"70%"}>
            <FormControl w={"full"}>
              <FormLabel>email</FormLabel>
              <Input
                type={"email"}
                variant={"filled"}
                size={"sm"}
                placeholder="email address"
              />
            </FormControl>
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
}

export default ProfileSettingSection;
