import { HStack, Text, VStack } from "@chakra-ui/react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import styles from "./loading.module.css";
import { Nunito } from "@next/font/google";
import { useRouter } from "next/router";

const numitoFont = Nunito({
  //   preload: true,
  fallback: ["block"],
  weight: ["300", "400", "500", "600", "700"],
});
function LoadingPage({ show }: { show: boolean }) {
  const { pathname } = useRouter();
  const currentPage = pathname === "/" ? "UP" : pathname.split("/")?.[1];
  return (
    <VStack
      position={"fixed"}
      width={"100%"}
      minH={"100dvh"}
      h={"100dvh"}
      top={"0"}
      left={"0"}
      zIndex={"10000000"}
      bg={"gray.100"}
      alignItems={"center"}
      transition={"all 300ms ease-out"}
      opacity={show ? "0.98" : "0"}
      transform={"auto-gpu"}
      translateY={show ? "none" : "25px"}
      pointerEvents={show ? "auto" : "none"}
      userSelect={show ? "auto" : "none"}
    >
      <HStack width={"full"} minHeight={"50%"} justifyContent={"center"}>
        <VStack
          paddingBlock={"0.1rem"}
          borderRadius={"50%"}
          alignItems={"flex-start"}
        >
          <ArrowTrendingUpIcon
            width={"3rem"}
            color={"#0014FF"}
            fontWeight={"bold"}
          />

          <Text
            fontSize={"4xl"}
            fontWeight={numitoFont.style.fontWeight}
            fontFamily={numitoFont.style.fontFamily}
            fontStyle={numitoFont.style.fontStyle}
            lineHeight={"18px"}
            textTransform={"uppercase"}
            color={"black"}
            mt={"0px !important"}
          >
            UP
          </Text>
        </VStack>
      </HStack>
      <VStack width={"full"} h={"100px"} justifyContent={"center"}>
        <div className={styles["spinner"]}>
          <div className={styles["spinner-item"]}></div>
          <div className={styles["spinner-item"]}></div>
          <div className={styles["spinner-item"]}></div>
          <div className={styles["spinner-item"]}></div>
          <div className={styles["spinner-item"]}></div>
        </div>
        <Text textTransform={"uppercase"} fontWeight={"bold"}>
          Loading {currentPage} ..
        </Text>
      </VStack>
    </VStack>
  );
}

export default LoadingPage;
