import React from "react";

export interface ISideContentListProps {
  SideFaviouritesPeopleListData: IFaviouritesPeopleListData[];

}
export interface IFaviouritesPeopleListData {
  key: string;
  image: string;
  name: string;
  isFavourite: boolean;
}
