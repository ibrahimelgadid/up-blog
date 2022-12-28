import React from "react";

export interface ISideWritersListProps {
  writerPeopleListData: IWritersPeopleListData[];
}
export interface IWritersPeopleListData {
  key: string;
  image: string;
  name: string;
  articlesCount: number;
}
