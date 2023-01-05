import { ReactNode } from "react";
export interface ITopArticlesRadioOptions {
  radioItem: {
    label: string;
    value: string;
    checked: boolean;
  };
}
export interface ITopSubjectsRadioOptions extends ITopArticlesRadioOptions {}
export interface ITopArticlesRadio {
  selected: boolean;
  selectRadioOption: ITopArticlesRadioOptions;
}
export interface ISideWritersListProps {
  writerPeopleListData: IWritersPeopleListData[];
}
export interface IWritersPeopleListData {
  key: string;
  image: string;
  name: string;
  articlesCount: number;
}
