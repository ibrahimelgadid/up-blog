import { Flex, Button, TabList, Tab, Tabs, Text, Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { CurrentTabType, navbarProps } from "../lib/interfaces/INavbar";
import NextLink from "next/link";

function Navbar({ navbarDataSource }: navbarProps) {
  const [currentTabState, setCurrentTab] = useState<CurrentTabType>("home");
  return (
    <Flex
      as={"nav"}
      width={"35%"}
      height={"100%"}
      paddingBlock={"0.2rem"}
      paddingInline={"0.5"}
      justifyContent={"flex-end"}
    >
      <Tabs variant={"enclosed-colored"}>
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
                _selected={{ color: "white", bg: "messenger.600" }}
                borderRadius={"25px"}
                paddingBlock={"0.4rem"}
                textTransform={"uppercase"}
                fontWeight={"semibold"}
                bg={"gray.100"}
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
                  <
                    // as={NextLink}
                    // display={"flex"}
                    // alignItems={"center"}
                    // justifyContent={"center"}
                    // href={url}
                  >
                    {icon}
                  </>
                )}
              </Tab>
            ))}
        </TabList>
      </Tabs>
    </Flex>
  );
}

export default Navbar;
