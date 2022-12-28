export interface IArticleCardProps {
  ArticleCardData: IArticleCardData;
}

export interface IArticleCardData {
  id: string;
  media: string;
  title: string;
  userPublisher: {
    avatar: string;
    firstName: string;
    lastName: string;
  };
  timeStamp: string;
  puplishAt: string;
  articleDescribtion: string;
  articleContent: string;
}
