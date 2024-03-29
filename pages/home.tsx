import {
  ListItem,
  UnorderedList,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { nanoid } from "@reduxjs/toolkit";
import Head from "next/head";
import Post from "../components/Post";
import { IPost } from "../lib/interfaces/iApp";

const Home = () => {
  const postsDataSource: IPost[] = [
    {
      avatar: "https://picsum.photos/402.webp",
      bio: "job title or bio",
      comments: [
        {
          firstName: "John",
          lastName: "doe",
          timeStamp: "12 minutes ago",
          upCount: 30000,
          username: "alasd 5453",
          avatar: "https://picsum.photos/302.webp",
          bio: "job title or bio",
          commentContent:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius optio perferendis magni? Eligendi hic placeat unde eum sunt magni doloremque.",
        },
      ],
      username: "jone 325234",
      firstName: "john",
      lastName: "doe",
      postContent:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, iusto cupiditate. Dolore, magni architecto quas reiciendis voluptate laudantium, earum, ut ab magnam praesentium eaque. Reiciendis eaque hic voluptate blanditiis nihil.",
      postMedia: "https://picsum.photos/770.webp",
      shearCount: 4000,
      upCount: 21_000,
    },
    {
      avatar: "https://picsum.photos/403.webp",
      bio: "job title or bio",
      comments: [
        {
          firstName: "John",
          lastName: "doe 53",
          timeStamp: "42 minutes ago",
          upCount: 3000,
          username: "ahqd 5453",
          avatar: "https://picsum.photos/303.webp",
          bio: "job title or bio",
          commentContent:
            "Lorem ipsum dolor si optio perferendis magni? Eligendi hic placeat unde eum sunt magni doloremque.",
        },
      ],
      username: "joneasdg 332",
      firstName: "john",
      lastName: "doe 21",
      postContent:
        "Lorem ipsum do iusto cupiditate. Dolore, magni architecto quas reiciendis voluptate laudantium, earum, ut ab magnam praesentium eaque. Reiciendis eaque hic voluptate blanditiis nihil.",
      postMedia: "https://picsum.photos/769.webp",
      shearCount: 8000,
      upCount: 12_000,
    },
    {
      avatar: "https://picsum.photos/404.webp",
      bio: "job title or bio",
      comments: [
        {
          firstName: "John",
          lastName: "doe 56",
          timeStamp: "55 minutes ago",
          upCount: 18000,
          username: "alasdaa 456",
          avatar: "https://picsum.photos/305.webp",
          bio: "job title or bio",
          commentContent:
            "Lorem ipsum dolor siti? Eligendi hic placeat unde eum sunt magni doloremque.",
        },
      ],
      username: "jone 2222114",
      firstName: "john",
      lastName: "doe 78",
      postContent:
        "Lorem ipsum ni architecto quas reiciendis voluptate laudantium, earum, ut ab magnam praesentium eaque. Reiciendis eaque hic voluptate blanditiis nihil.",
      postMedia: "https://picsum.photos/768.webp",
      shearCount: 6000,
      upCount: 3_000,
    },
  ];
  const [maxLargeMedia] = useMediaQuery("(max-width: 992px)");
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack
        as={"main"}
        position={"relative"}
        width={maxLargeMedia ? "full" : "45%"}
        marginBlockStart={"0.6rem"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <UnorderedList w={"100%"}>
          {postsDataSource.map((post) => (
            <ListItem key={nanoid(8)} listStyleType={"none"}>
              <Post postData={post} />
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
    </>
  );
};

export default Home;
