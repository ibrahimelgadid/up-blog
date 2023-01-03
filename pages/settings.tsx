import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import ProfileSettingSection from "../components/ProfileSettingSection";
import SettingsSideList from "../components/SettingsSideList";

const settings = () => {
  return (
    <>
      <Head>
        <title>account Settings</title>
      </Head>
      <Flex
        as={"main"}
        width={"full"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
      >
        <Box width={"25%"}>
          <SettingsSideList />
        </Box>
        <Box width={"70%"}>
          <ProfileSettingSection />
        </Box>
      </Flex>
    </>
  );
};

export default settings;
