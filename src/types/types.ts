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

export type ShowPopup = {
  [key: string]: ReactElement | undefined | boolean
  component?: ReactElement | false,
  exitOnBgClick?: boolean,
};

export type SheetEntry = {
  [key: string]: string | null | undefined
}

export type Search = {
  [key: string]: string | boolean | undefined
  text?: string,
  showResult?: boolean,
}
export interface SearchInterface {
  text?: string,
  showResult?: boolean,
}

export type Sheet = {
  [key: string]: string | Array<SheetEntry> | undefined,
  name: string,
  data: Array<SheetEntry>,
  displayData?: Array<SheetEntry>,
  displayDataOrig?: Array<SheetEntry>,
};
export interface SheetInterface {
  name: string,
  data: Array<SheetEntry>,
  displayData?: Array<SheetEntry>,
  displayDataOrig?: Array<SheetEntry>,
}
