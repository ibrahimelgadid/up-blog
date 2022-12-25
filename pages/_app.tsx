import "../styles/globals.css";
import { useRef } from "react";
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
  DrawerFooter,
  DrawerHeader,
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
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
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
        maxH={"91dvh"}
        h={"95dvh"}
        justify="space-between"
        paddingInline={largeMedia ? "0.5rem" : "3.5rem"}
        bg={"gray.200"}
      >
        {!largeMedia &&
          router?.pathname !== "/login" &&
          router?.pathname !== "/signup" && <LeftSidePannel />}

        <Component {...pageProps} />
        {!largeMedia &&
          router?.pathname !== "/login" &&
          router?.pathname !== "/signup" && <RightSidePannel />}
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
