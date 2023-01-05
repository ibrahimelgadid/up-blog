import { Flex, Button, TabList, Tab, Tabs, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { CurrentTabType, navbarProps } from "../lib/interfaces/INavbar";
import NextLink from "next/link";
import { useRouter } from "next/router";

function Navbar({ navbarDataSource }: navbarProps) {
  const { pathname } = useRouter();
  const currentRoute = pathname.split("/")?.[1] as CurrentTabType;
  const [currentTabState, setCurrentTab] =
    useState<CurrentTabType>(currentRoute);

  console.log(currentTabState);
  return (
    <Flex
      as={"nav"}
      width={"35%"}
      height={"100%"}
      paddingBlock={"0.2rem"}
      paddingInline={"0.5"}
      justifyContent={"flex-end"}
    >
      <Tabs isManual isLazy variant={"soft-rounded"}>
        <TabList as={"ul"} gap={"5px"} paddingBlock={"0.5rem"}>
          {Array.isArray(navbarDataSource) &&
            navbarDataSource.map(({ currentTab, icon, key, label, url }) => (
              <Tab
                key={key}
                as={NextLink}
                display={"flex"}
                gap={"5px"}
                alignItems={"center"}
                justifyContent={"center"}
                onClick={() => setCurrentTab(currentTab)}
                href={url}
                paddingBlock={"0.4rem"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                paddingInline={
                  currentTab === currentTabState ? "1.2rem" : "0.5rem"
                }
                _hover={
                  currentTabState !== currentTab
                    ? { bg: "gray.200" }
                    : undefined
                }
              >
                {currentTabState === currentTab ? (
                  <>
                    {icon}
                    <Text>{label}</Text>
                  </>
                ) : (
                  <>{icon}</>
                )}
              </Tab>
            ))}
        </TabList>
      </Tabs>
    </Flex>
  );
}

export default Navbar;
