import { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Link,
  Stack,
  VStack,
  HStack,
  Divider,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import Logo from "../components/Logo";
import NextLink from "next/link";
import { ISignupFormData } from "../lib/interfaces/ISignup";
import FacebookLogoSVG from "../components/FacebookLogoSVG";
import GoogleLogoSVG from "../components/GoogleLogoSVG";
import Head from "next/head";

const Signup = () => {
  const [maxLargeMediaQuery] = useMediaQuery("(max-width: 992px)");
  const [formData, setFormData] = useState<ISignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isAgreement: false,
  });

  const handleGetSignupData = (ev: React.ChangeEvent) => {
    const target = ev.target as HTMLInputElement;
    const value = target.value;
    const field = target.name;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Head>
        <title>Up Blog | SIGNUP</title>
      </Head>
      <Flex
        minHeight={"100dvh"}
        width={"full"}
        direction={"column"}
        position={"fixed"}
        left={"0"}
        top={"0"}
        backgroundColor={"white"}
      >
        <HStack
          width={"full"}
          height={"65px"}
          paddingInline={"1rem"}
          justify={"space-between"}
          alignItems={"center"}
          borderBottom={"1px solid"}
          borderColor={"gray.400"}
        >
          <Button
            variant={"ghost"}
            leftIcon={<ChevronLeftIcon fontSize={"1.5rem"} />}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            textTransform={"capitalize"}
          >
            back
          </Button>
          <Button
            size={"sm"}
            variant={"ghost"}
            colorScheme={"messenger"}
            borderRadius={"sm"}
            textTransform={"capitalize"}
            as={NextLink}
            href={"/login"}
          >
            login
          </Button>
        </HStack>
        <VStack paddingBlockStart={"2rem"} gap={"1rem"}>
          <Logo />
          <Heading
            as={"h4"}
            fontSize={maxLargeMediaQuery ? "md" : "xl"}
            textTransform={"uppercase"}
            display={"flex"}
            gap={"0.5rem"}
          >
            Getting stating with
            <Text color={"messenger.600"}>UP</Text>
          </Heading>
        </VStack>
        <Stack
          flexDirection={maxLargeMediaQuery ? "column" : "row"}
          bg={"white"}
          height={"full"}
          justify={"center"}
          gap={"15px"}
          alignItems={"center"}
        >
          <VStack
            marginBottom={"1rem"}
            w={maxLargeMediaQuery ? "90%" : "25%"}
            mx={maxLargeMediaQuery ? "auto" : "1.5rem"}
            alignItems={"flex-start"}
          >
            <HStack justifyContent={"flex-start"} alignItems={"center"}>
              <FormControl
                isInvalid={Boolean(formData.firstName === "")}
                isRequired
              >
                <FormLabel>firstname</FormLabel>
                <Input
                  type={"text"}
                  variant={"outline"}
                  size={"sm"}
                  placeholder="John"
                  name="firstName"
                  id="first-name"
                  onChange={handleGetSignupData}
                />
                {formData.firstName === "" && (
                  <FormErrorMessage>
                    firstname is required field
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={Boolean(formData.lastName === "")}
                isRequired
              >
                <FormLabel>lastname</FormLabel>
                <Input
                  type={"text"}
                  variant={"outline"}
                  size={"sm"}
                  placeholder="Doe"
                  name="lastName"
                  id="last-name"
                  onChange={handleGetSignupData}
                />
                {formData.lastName === "" && (
                  <FormErrorMessage>
                    lastname is required field
                  </FormErrorMessage>
                )}
              </FormControl>
            </HStack>
            <FormControl isInvalid={Boolean(formData.email === "")} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                variant={"outline"}
                size={"sm"}
                placeholder="example@email.com"
                name="email"
                id="email-address"
                onChange={handleGetSignupData}
              />
              {formData.email === "" && (
                <FormErrorMessage>
                  Email address is required field
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={Boolean(formData.password === "")}
              isRequired
            >
              <FormLabel>password</FormLabel>
              <Input
                type={"password"}
                variant={"outline"}
                size={"sm"}
                placeholder="***********"
                name="password"
                id="password-key"
                onChange={handleGetSignupData}
              />
              {formData.password === "" && (
                <FormErrorMessage>password is required field</FormErrorMessage>
              )}
            </FormControl>
            <HStack
              w={"full"}
              justifyContent={"start"}
              alignItems={"start"}
              marginBlockEnd={"2rem !important"}
            >
              <Checkbox
                name="isAgreement"
                checked={formData.isAgreement}
                onChange={handleGetSignupData}
              >
                <Text
                  fontSize={"xs"}
                  textAlign={"start"}
                  textTransform={"uppercase"}
                >
                  i agree on the terms and conditions of "up" services
                </Text>
              </Checkbox>
            </HStack>
            <Button
              variant={"solid"}
              size={"sm"}
              colorScheme={"messenger"}
              w={"full"}
              textTransform={"uppercase"}
              borderRadius={"sm"}
              rightIcon={<ArrowForwardIcon />}
              disabled={Boolean(formData.email === "" || formData.email === "")}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              create account
            </Button>
          </VStack>
          <Divider
            borderColor={"gray.300"}
            border={"1px"}
            orientation="vertical"
            width={maxLargeMediaQuery ? "90%" : "auto"}
            height={maxLargeMediaQuery ? "auto" : "60%"}
          />
          <VStack w={maxLargeMediaQuery ? "90%" : "25%"}>
            <VStack w={maxLargeMediaQuery ? "100%" : "auto"}>
              <Button
                variant={"outline"}
                leftIcon={<GoogleLogoSVG />}
                colorScheme={"messenger"}
                width={"full"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={"15px"}
                textTransform={"uppercase"}
                borderRadius={"sm"}
              >
                sign up with Google
              </Button>
              <Button
                variant={"outline"}
                leftIcon={<FacebookLogoSVG />}
                colorScheme={"messenger"}
                width={"full"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={"15px"}
                textTransform={"uppercase"}
                borderRadius={"sm"}
              >
                sign up with Facebook
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </>
  );
};

export default Signup;
