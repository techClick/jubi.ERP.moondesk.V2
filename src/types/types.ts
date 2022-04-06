import { ReactElement } from 'react';

export type IResponse = {
  status: 'error' | 'success',
  data?: string,
  description: string,
};

export type CallArgs = {
  prefix: 1 | 2,
  api: string,
  noStatus?: boolean,
  method?: string,
  body?: any,
  type?: 'json' | 'blob',
  token?: string,
  VerifyToken?: string,
  isUnAuthed?: boolean;
  noStringify?: boolean;
  noContentType?: boolean;
};

type ShowPopupKeys = {
  component?: ReactElement | false,
  exitOnBgClick?: boolean,
  action?: Function,
}
export type ShowPopup = {
  [key in keyof ShowPopupKeys]: ShowPopupKeys[key]
};

type SearchKeys = {
  text?: string,
  showResult?: boolean,
}

export type Search = {
  [key in keyof SearchKeys]: SearchKeys[key]
}

export type RowSearch = {
  [key: string]: string,
}

type SearchTypesKeys = {
  plainSearch?: Search,
  dateSearch?: Search,
  rowSearch?: RowSearch,
}

export type SearchTypes = {
  [key in keyof SearchTypesKeys]: SearchTypesKeys[key]
}

export type SheetEntry = {
  [key: string]: string | null | undefined
}

type SheetKeys = {
  name: string,
  data: Array<SheetEntry>,
  date: Date,
  isSortRow?: boolean,
  search?: SearchTypes,
}

export type Sheet = {
  [key in keyof SheetKeys]: SheetKeys[key]
};

export type DisplaySheet = Array<SheetEntry>;

type SettingsKeys = {
  isSortRow: Array<boolean>,
}

export type Settings = {
  [key in keyof SettingsKeys]: SettingsKeys[key]
};
