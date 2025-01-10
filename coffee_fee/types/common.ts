export interface A {
  s: string;
}
// test

export interface ISubMenu {
  key: number;
  title: string;
  url: string;
}
export interface ISubTab {
  key?: number;
  titleTab: string;
  listSub: ISubMenu[];
}
