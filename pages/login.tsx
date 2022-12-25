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
import { ILoginFormData } from "../lib/interfaces/ILogin";
import FacebookLogoSVG from "../components/FacebookLogoSVG";
import GoogleLogoSVG from "../components/GoogleLogoSVG";
import Head from "next/head";

const login = () => {
  const [maxLargeMediaQuery] = useMediaQuery("(max-width: 992px)");
  const [formData, setFormData] = useState<ILoginFormData>({
    email: "",
    password: "",
    isRemembered: false,
  });

  const handleGetLoginData = (ev: React.ChangeEvent) => {
    const target = ev.target as HTMLInputElement;
    const value = target.value;
    const field = target.name;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Head>
        <title>Up Blog | LOGIN</title>
      </Head>
      <Flex
        height={"100dvh"}
        width={"full"}
        direction={"column"}
        position={"fixed"}
        left={"0"}
        top={"0"}
        backgroundColor={"white"}
      >
        <HStack
          width={"full"}
          height={"85px"}
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
            href={"/signup"}
          >
            create account
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
            login into <Text color={"messenger.600"}>UP</Text>
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
            <FormControl isInvalid={Boolean(formData.email === "")} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                variant={"outline"}
                size={"sm"}
                placeholder="example@email.com"
                name="email"
                id="email-address"
                onChange={handleGetLoginData}
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
                onChange={handleGetLoginData}
              />
              {formData.password === "" && (
                <FormErrorMessage>password is required field</FormErrorMessage>
              )}
            </FormControl>
            <HStack
              w={"full"}
              justifyContent={"space-between"}
              marginBlockEnd={"2rem !important"}
            >
              <Checkbox
                name="isRemembered"
                checked={formData.isRemembered}
                onChange={handleGetLoginData}
              >
                <Text fontSize={"sm"} textTransform={"uppercase"}>
                  remember me
                </Text>
              </Checkbox>
              <Link
                as={NextLink}
                href="/resetPassword"
                fontSize={"sm"}
                textColor="blue.500"
              >
                forget password
              </Link>
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
              log in
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
                sign in with Google
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
                sign in with Facebook
              </Button>
            </VStack>
          </VStack>
        </Stack>
      </Flex>
    </>
  );
};

export default login;
