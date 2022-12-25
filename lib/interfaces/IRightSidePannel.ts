import { IFrindRequist, IUser } from "./iApp";

export interface IUserAccountSummaryProps {
  userData: Partial<IUser>;
}
export interface IFriendsRequestsListProps {
  friendsRequestsData: IFrindRequist[];
}
