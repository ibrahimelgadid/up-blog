export interface IFrindRequist {
  key: string;
  avatar: string;
  firstName: string;
  lastName: string;
  elapsedTime: string;
  isAccepted: boolean;
}
export interface IUser {
  profileCoverImg: string;
  avatar: string;
  firstName: string;
  lastName: string;
  username: string;
  posts: string;
  following: string;
  followers: string;
  isOnline: boolean;
  bio: string;
}
export interface IComment {
  avatar: string;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  commentContent: string;
  upCount: number;
  timeStamp: string;
}
export interface IPost {
  avatar: string;
  firstName: string;
  lastName: string;
  username: string;
  bio: string;
  comments: IComment[];
  postMedia: string | null;
  postContent: string;
  upCount: number;
  shearCount: number;
}
