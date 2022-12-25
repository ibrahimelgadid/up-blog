import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Divider,
  Flex,
  HStack,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { InboxIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { NavbarControlButtonsProps } from "../lib/interfaces/INavbar";
import {
  ArrowTopRightOnSquareIcon,
  UserGroupIcon,
  ArrowLeftOnRectangleIcon,
  SwatchIcon,
} from "@heroicons/react/24/outline";
import NextLink from "next/link";

function NavbarControlButtons({ userData }: NavbarControlButtonsProps) {
  return (
    <HStack>
      <Button
        type="button"
        borderRadius={"50%"}
        padding={"1px"}
        minWidth={"35px"}
        height={"35px"}
      >
        <InboxIcon width={"20px"} />
      </Button>
      <Button
        type="button"
        borderRadius={"50%"}
        padding={"1px"}
        minWidth={"35px"}
        height={"35px"}
      >
        <LanguageIcon width={"20px"} />
      </Button>
      <Flex>
        <Menu>
          <MenuButton
            as={Button}
            flexDirection={"row"}
            width={"150px"}
            display={"flex"}
            flexDir={"row"}
            rightIcon={<ChevronDownIcon />}
            borderRadius={"25px"}
          >
            <Stack
              width={"full"}
              height={"inherit"}
              direction={"row"}
              alignItems={"center"}
            >
              <Avatar
                size={"xs"}
                name={`${userData?.firstName} ${userData?.lastName}`}
                src={userData?.avatar}
                loading={"lazy"}
              >
                <AvatarBadge
                  boxSize={"50%"}
                  bg={userData?.isOnline ? "green.500" : "gray.500"}
                />
              </Avatar>
              <Text fontSize={"xs"} maxW={"full"} overflow={"hidden"}>
                {userData?.firstName} {userData?.lastName}
              </Text>
            </Stack>
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Flex
                width={"full"}
                justify={"start"}
                alignItems={"center"}
                gap={"0.5rem"}
              >
                <Stack w={"30%"}>
                  <Avatar
                    size={"md"}
                    name={`${userData?.firstName} ${userData?.lastName}`}
                    src={userData?.avatar}
                    loading={"lazy"}
                  >
                    <AvatarBadge
                      boxSize={"50%"}
                      bg={userData?.isOnline ? "green.500" : "gray.500"}
                    />
                  </Avatar>
                </Stack>
                <VStack justify={"center"} alignItems={"flex-start"}>
                  <Link href="#" textTransform={"capitalize"}>
                    profile settings
                  </Link>
                  <Text
                    marginTop={"2px !important"}
                    color={"gray.400"}
                    lineHeight={"15px"}
                    fontSize={"sm"}
                    display={"flex"}
                    gap={"10px"}
                  >
                    @{userData.username}
                    <ArrowTopRightOnSquareIcon width={"15px"} />
                  </Text>
                </VStack>
              </Flex>
            </MenuItem>
            <Divider />
            <MenuItem paddingInline={"4px"} paddingBlock={"2px"}>
              <Button
                as={NextLink}
                href="#"
                leftIcon={<UserGroupIcon width={"23px"} />}
                inlineSize={"full"}
                justifyContent={"flex-start"}
                variant="ghost"
                textTransform={"capitalize"}
                size={"sm"}
              >
                peoples
              </Button>
            </MenuItem>
            <Divider />

            <MenuItem paddingInline={"4px"} paddingBlock={"2px"}>
              <Button
                as={NextLink}
                href="#"
                leftIcon={<SwatchIcon width={"23px"} />}
                inlineSize={"full"}
                justifyContent={"flex-start"}
                variant="ghost"
                textTransform={"capitalize"}
                size={"sm"}
              >
                color mode
              </Button>
            </MenuItem>
            <Divider />

            <MenuItem paddingInline={"4px"} paddingBlock={"2px"}>
              <Button
                as={NextLink}
                href="#"
                leftIcon={<ArrowLeftOnRectangleIcon width={"23px"} />}
                inlineSize={"full"}
                justifyContent={"flex-start"}
                variant="ghost"
                color={"red.600"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                size={"sm"}
              >
                logout
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}

export default NavbarControlButtons;
