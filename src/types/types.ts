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
  [key: string]: string | number | null | undefined
}

export type SearchState = {
  [key: string]: string | boolean | undefined
  text?: string,
  showResult?: boolean,
}

export type Sheet = {
  [key: string]: string | Array<SheetEntry>
  name: string,
  data: Array<SheetEntry>,
};
