import { ChevronDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Avatar,
  AvatarBadge,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import { InboxIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { NavbarControlButtonsProps } from "../lib/interfaces/INavbar";
import {
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
          <MenuList paddingBlockEnd={"0px"}>
            <Text
              fontSize={"sm"}
              fontWeight={"semibold"}
              textTransform={"capitalize"}
              color={"chakra-placeholder-color"}
              px={"0.5rem"}
              mb={"1rem"}
            >
              quick settings
            </Text>
            <MenuItem paddingInline={"4px"} pr={"8px "} paddingBlock={"8px"}>
              <Button
                as={NextLink}
                href={"/profile"}
                variant={"link"}
                inlineSize={"full"}
                justifyContent={"space-between"}
                leftIcon={
                  <Avatar
                    size={"xs"}
                    src={userData?.avatar}
                    name={`${userData?.firstName} ${userData?.lastName}`}
                  />
                }
                rightIcon={<ExternalLinkIcon fontSize={"12px"} mx={"4px"} />}
              >
                <Text
                  marginInlineEnd={"auto"}
                  textTransform={"capitalize"}
                  fontWeight={"normal"}
                  color={"black"}
                >
                  profile
                </Text>
              </Button>
            </MenuItem>
            <Divider />
            <MenuItem
              paddingInline={"4px"}
              pr={"8px "}
              paddingBlock={"8px"}
              icon={<SwatchIcon width={"20px"} />}
            >
              <FormControl
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                flexDir={"row"}
              >
                <FormLabel
                  htmlFor="switch-clr-mode"
                  fontSize={"sm"}
                  my={"auto"}
                  textTransform={"capitalize"}
                >
                  color mode
                </FormLabel>
                <Switch id="switch-clr-mode" size={"sm"} />
              </FormControl>
            </MenuItem>
            <Divider />
            <MenuItem
              paddingInline={"4px"}
              paddingBlock={"2px"}
              icon={
                <ArrowLeftOnRectangleIcon
                  width={"23px"}
                  color={"var(--chakra-colors-red-600)"}
                />
              }
            >
              <Button
                as={NextLink}
                href="#"
                inlineSize={"full"}
                px={"0px"}
                justifyContent={"flex-start"}
                variant="ghost"
                color={"red.600"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                size={"xs"}
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
