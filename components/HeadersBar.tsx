import { Container, Flex, HStack, useMediaQuery } from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import { INavbarLinksData } from "../lib/interfaces/INavbar";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavbarControlButtons from "./NavbarControlButtons";
import {
  HomeIcon,
  UserGroupIcon,
  BellIcon,
  NewspaperIcon,
} from "@heroicons/react/24/solid";
import { INavbarProps } from "../lib/interfaces/IHeaderbar";

function HeadersBar({ appDrowerButton }: INavbarProps) {
  const [mediaIsSmall] = useMediaQuery("(max-width: 992px)");
  const navbarLinks: INavbarLinksData[] = [
    {
      key: nanoid(6),
      label: "home",
      url: "/",
      currentTab: "home",
      icon: <HomeIcon width={"20px"} />,
    },
    {
      label: "articles",
      key: nanoid(6),
      url: "/articles",
      currentTab: "articles",
      icon: <NewspaperIcon width={"20px"} />,
    },
    {
      label: "groups",
      key: nanoid(6),
      url: "/groups",
      currentTab: "groups",
      icon: <UserGroupIcon width={"20px"} />,
    },
    {
      label: "notifications",
      key: nanoid(6),
      url: "/notifications",
      currentTab: "notifications",
      icon: <BellIcon width={"20px"} />,
    },
  ];

  return (
    <HStack
      as={"header"}
      borderBottom={"1px solid"}
      borderColor={"gray.300"}
      backgroundColor={"white"}
      paddingBlock={"0.5rem"}
      justifyContent={"flex-start"}
      height={"53px"}
      position={"sticky"}
      top={0}
      zIndex={"overlay"}
    >
      <Container maxW={"container.xl"}>
        <Flex
          direction={"row"}
          justify={"space-between"}
          height={"100%"}
          alignItems={"center"}
        >
          {!mediaIsSmall ? (
            <>
              <Logo />
              <Navbar navbarDataSource={navbarLinks} />
              <NavbarControlButtons
                userData={{
                  firstName: "ahmed",
                  lastName: "shehata",
                  isOnline: true,
                  username: "ahmed98",
                }}
              />
            </>
          ) : (
            <>
              <Flex width={"95%"} justify={"center"} alignItems={"center"}>
                <Logo />
              </Flex>
              {appDrowerButton}
            </>
          )}
        </Flex>
      </Container>
    </HStack>
  );
}

export default HeadersBar;
