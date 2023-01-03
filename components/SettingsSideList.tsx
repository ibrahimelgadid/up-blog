import {
  Flex,
  ListItem,
  List,
  ListIcon,
  Text,
  useMediaQuery,
  HStack,
} from "@chakra-ui/react";
import {
  UserCircleIcon,
  SwatchIcon,
  BellAlertIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

function SettingsSideList() {
  const [maxLargeMediaQuery] = useMediaQuery("(max-width: 992px)");
  return (
    <Flex
      as={"aside"}
      width={maxLargeMediaQuery ? "full" : "25%"}
      height={"100vh"}
      bg={"white"}
      paddingInlineStart={maxLargeMediaQuery ? "1rem" : "2.5rem"}
      paddingInlineEnd={maxLargeMediaQuery ? "1rem" : "0.5rem"}
      py={"1.5rem"}
      position={maxLargeMediaQuery ? "relative" : "fixed"}
      top={maxLargeMediaQuery ? "auto" : "50px"}
      left={maxLargeMediaQuery ? "auto" : "0"}
    >
      <List
        spacing={3}
        w={"full"}
        display={"flex"}
        flexDir={"column"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
      >
        <ListItem
          display={"flex"}
          w={"full"}
          flexDir={"row"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          p={"0.5rem"}
          borderRadius={"sm"}
          cursor={"pointer"}
          _hover={{ backgroundColor: "var(--chakra-colors-messenger-50)" }}
        >
          <ListIcon
            as={UserCircleIcon}
            color="messenger.700"
            fontSize={"2xl"}
            marginInlineEnd={"1rem"}
          />
          <Text textTransform={"capitalize"} fontWeight={"semibold"}>
            profile
          </Text>
        </ListItem>
        <ListItem
          display={"flex"}
          w={"full"}
          flexDir={"row"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          p={"0.5rem"}
          borderRadius={"sm"}
          _hover={{ backgroundColor: "var(--chakra-colors-messenger-50)" }}
          cursor={"pointer"}
        >
          <ListIcon
            as={SwatchIcon}
            color="messenger.700"
            fontSize={"2xl"}
            marginInlineEnd={"1rem"}
          />
          <Text textTransform={"capitalize"} fontWeight={"semibold"}>
            customization
          </Text>
        </ListItem>
        <ListItem
          display={"flex"}
          w={"full"}
          flexDir={"row"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          p={"0.5rem"}
          borderRadius={"sm"}
          cursor={"pointer"}
          _hover={{ backgroundColor: "var(--chakra-colors-messenger-50)" }}
        >
          <ListIcon
            as={BellAlertIcon}
            color="messenger.700"
            fontSize={"2xl"}
            marginInlineEnd={"1rem"}
          />
          <Text textTransform={"capitalize"} fontWeight={"semibold"}>
            notifications
          </Text>
        </ListItem>
        <ListItem
          display={"flex"}
          w={"full"}
          flexDir={"row"}
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          p={"0.5rem"}
          borderRadius={"sm"}
          cursor={"pointer"}
          _hover={{ backgroundColor: "var(--chakra-colors-messenger-50)" }}
        >
          <ListIcon
            as={WrenchScrewdriverIcon}
            color="messenger.700"
            fontSize={"2xl"}
            marginInlineEnd={"1rem"}
          />
          <Text textTransform={"capitalize"} fontWeight={"semibold"}>
            account edit
          </Text>
        </ListItem>
      </List>
    </Flex>
  );
}

export default SettingsSideList;
