import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import {
  EllipsisVerticalIcon,
  ExclamationTriangleIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  MapPinIcon,
  ArrowLeftOnRectangleIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import Head from "next/head";

const Profile = () => {
  const [maxLargeMediaQuery] = useMediaQuery("(max-width: 992px)");

  return (
    <>
      <Head>
        <title> ahmed shehata | profile</title>
      </Head>
      <Flex
        as={"main"}
        minH={"100dvh"}
        w={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"100%"} h={"40%"} left={"0"} top={"0"} position={"absolute"}>
          <HStack
            w={"100%"}
            h={"100%"}
            bgRepeat={"no-repeat"}
            bgSize={"cover"}
            position={"relative"}
            style={{ backgroundImage: `url(https://picsum.photos/1280.webp)` }}
          >
            <Box
              position={"absolute"}
              inset={"0"}
              bg={"gray.800"}
              opacity={"0.5"}
              backdropBlur={"lg"}
            ></Box>
          </HStack>
        </Box>
        <VStack
          bg={"white"}
          zIndex={"banner"}
          minHeight={maxLargeMediaQuery ? "100%" : "75%"}
          width={"100%"}
          border={"1px solid"}
          borderColor={"chakra-border-color"}
          shadow={"lg"}
          justifyContent={"space-between"}
          alignItems={"center"}
          mt={maxLargeMediaQuery ? "8rem" : undefined}
          borderRadius={"ms"}
        >
          <Flex
            w={"full"}
            height={maxLargeMediaQuery ? "150px" : "120px"}
            position={"relative"}
            justifyContent={maxLargeMediaQuery ? "flex-end" : "center"}
            alignItems={"center"}
            paddingTop={"1rem"}
            flexDir={"column"}
            gap={"1rem"}
            bg={"gray.100"}
          >
            <Box
              position={"absolute"}
              top={maxLargeMediaQuery ? "-35%" : "-40%"}
              style={{
                backgroundImage: `url(https://picsum.photos/1280.webp)`,
              }}
              borderRadius="50%"
              padding={"0.3rem"}
            >
              <Avatar
                src="https://picsum.photos/400.webp"
                name="jone doe"
                size={"2xl"}
              >
                <AvatarBadge borderColor="green.500" />
              </Avatar>
            </Box>
            <Flex
              w={"100%"}
              px={"1.5rem"}
              marginBlockEnd={"1rem"}
              flexDir={maxLargeMediaQuery ? "column" : "row"}
            >
              <HStack w={"50%"}></HStack>
              <HStack
                w={maxLargeMediaQuery ? "100%" : "50%"}
                justifyContent={maxLargeMediaQuery ? "center" : "flex-end"}
                alignItems={"center"}
              >
                <Button
                  variant={"solid"}
                  colorScheme={"messenger"}
                  px={"1.5rem"}
                  textTransform={"capitalize"}
                  size={maxLargeMediaQuery ? "sm" : "md"}
                >
                  follow
                </Button>
                <Button
                  as={NextLink}
                  href={"/settings"}
                  variant={"solid"}
                  colorScheme={"messenger"}
                  px={"1.5rem"}
                  textTransform={"capitalize"}
                  size={maxLargeMediaQuery ? "sm" : "md"}
                >
                  settings
                </Button>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    icon={<EllipsisVerticalIcon width={"25px"} />}
                    size={maxLargeMediaQuery ? "sm" : "md"}
                  />
                  <MenuList>
                    <MenuItem icon={<ExclamationTriangleIcon />}>
                      block this account
                    </MenuItem>
                    <MenuItem icon={<ExclamationTriangleIcon />}>
                      asking for thing
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </Flex>
          </Flex>
          <VStack
            w={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            px={"1rem"}
          >
            <Heading as={"h4"} fontSize={"2xl"} textTransform={"capitalize"}>
              johe doe
            </Heading>
            <Text
              color={"chakra-placeholder-color"}
              textTransform={"capitalize"}
            >
              @JoneDoe9256
            </Text>
            <UnorderedList alignSelf={"self-start"} my={"1rem"}>
              <ListItem listStyleType={"none"}>
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <Box bg={"gray.200"} borderRadius={"50%"} padding={"4px"}>
                    <BriefcaseIcon width={"20px"} />
                  </Box>
                  <Text textTransform={"capitalize"} fontSize={"sm"}>
                    content creator at web development
                  </Text>
                </Flex>
              </ListItem>
              <ListItem listStyleType={"none"}>
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <Box bg={"gray.200"} borderRadius={"50%"} padding={"4px"}>
                    <CalendarDaysIcon width={"20px"} />
                  </Box>
                  <Text textTransform={"capitalize"} fontSize={"sm"}>
                    10 / 1 / 1998
                  </Text>
                </Flex>
              </ListItem>
              <ListItem listStyleType={"none"}>
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <Box bg={"gray.200"} borderRadius={"50%"} padding={"4px"}>
                    <MapPinIcon width={"20px"} />
                  </Box>
                  <Text textTransform={"capitalize"} fontSize={"sm"}>
                    content creator at web development
                  </Text>
                </Flex>
              </ListItem>
              <ListItem listStyleType={"none"}>
                <Flex gap={"0.5rem"} alignItems={"center"}>
                  <Box bg={"gray.200"} borderRadius={"50%"} padding={"4px"}>
                    <ArrowLeftOnRectangleIcon width={"20px"} />
                  </Box>
                  <Text textTransform={"capitalize"} fontSize={"sm"}>
                    at 19:58:08 GMT+0200 (Eastern European Standard Time)
                  </Text>
                </Flex>
              </ListItem>
            </UnorderedList>
          </VStack>
          <HStack
            w={"100%"}
            borderTop={"1px solid"}
            borderColor={"chakra-border-color"}
            py={"1rem"}
            flexDir={maxLargeMediaQuery ? "column" : "row"}
          >
            <VStack w={"50%"} alignItems={"center"} justifyContent={"center"}>
              <Box
                mx={"auto"}
                mb={"10px"}
                bg={"gray.200"}
                borderRadius={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"50px"}
                w={"50px"}
              >
                <AcademicCapIcon width={"60%"} />
              </Box>
              <Text textTransform={"capitalize"}>high school grade</Text>
            </VStack>
            <VStack w={"50%"} alignItems={"center"} justifyContent={"center"}>
              <Box
                mx={"auto"}
                mb={"10px"}
                bg={"gray.200"}
                borderRadius={"50%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"50px"}
                w={"50px"}
              >
                <BuildingOffice2Icon width={"60%"} />
              </Box>
              <Text textTransform={"capitalize"}>work not working</Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

export default Profile;
