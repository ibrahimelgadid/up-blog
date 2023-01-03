import { ReactNode } from "react";
import { IUser } from "./iApp";

export type NavbarControlButtonsProps = {
  userData: Partial<IUser>;
};

export interface INavbarLinksData {
  key: string;
  label: string;
  icon: ReactNode;
  currentTab: CurrentTabType;
  url: string;
}

export type navbarProps = {
  navbarDataSource: INavbarLinksData[];
};
export type CurrentTabType = "home" | "articles" | "notifications" | "groups";
