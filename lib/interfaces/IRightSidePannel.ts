import { IFrindRequist, IUser } from "./iApp";

export interface IUserAccountSummaryProps {
  currentPage: string;
  userData: Partial<IUser>;
}
export interface IFriendsRequestsListProps {
  friendsRequestsData: IFrindRequist[];
}
