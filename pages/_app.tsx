import "../styles/globals.css";
import { useEffect, useRef, useState } from "react";
import type { AppProps } from "next/app";
import {
  Button,
  ChakraProvider,
  extendTheme,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import {
  Flex,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import HeadersBar from "../components/HeadersBar";
import LeftSidePannel from "../components/LeftSidePannel";
import RightSidePannel from "../components/RightSidePannel";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const theme = extendTheme({
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
});
export default function App({ Component, pageProps }: AppProps) {
  const [largeMedia] = useMediaQuery("(max-width: 992px)");
  const router = useRouter();
  const notPages: boolean = Boolean(
    router?.pathname !== "/login" &&
      router?.pathname !== "/signup" &&
      router?.pathname !== "/404"
  );
  const notArticlesPage = Boolean(router?.pathname !== "/articles");
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // useEffect(() => {}, []);
  return (
    <ChakraProvider theme={theme}>
      {router?.pathname !== "/login" && router?.pathname !== "/signup" && (
        <HeadersBar
          appDrowerButton={
            <Button
              colorScheme={"messenger"}
              ref={btnRef}
              padding={"4px !important"}
              borderRadius={"sm"}
              onClick={onOpen}
              variant={"outline"}
            >
              {isOpen ? (
                <CloseIcon fontSize={"2xl"} />
              ) : (
                <HamburgerIcon fontSize={"2xl"} />
              )}
            </Button>
          }
        />
      )}

      <Flex
        position={"relative"}
        maxH={"91dvh"}
        h={"100dvh"}
        justify={"center"}
        paddingInline={largeMedia ? "0.5rem" : "3.5rem"}
        bg={"gray.100"}
      >
        {!largeMedia && notPages && notArticlesPage && <LeftSidePannel />}

        <Component {...pageProps} />
        {!largeMedia && notPages && <RightSidePannel />}
        <Drawer
          isOpen={isOpen}
          placement={"right"}
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates iusto consectetur iste minus ut voluptatibus optio.
              Dolore tempora ab id animi similique! Magni voluptate recusandae
              neque fugit nobis esse qui.
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </ChakraProvider>
  );
}
