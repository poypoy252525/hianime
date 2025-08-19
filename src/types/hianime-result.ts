export interface HianimeResult {
  page: number;
  totalPage: number;
  hasNextPage: boolean;
  results: Result[];
}

export interface Result {
  id: string;
  image?: string;
  title?: string;
  type?: string;
  language?: Language;
  dataId: string;
}

export interface Language {
  sub?: null | string;
  dub?: null | string;
}

export enum Type {
  Ona = "ONA",
  Special = "SPECIAL",
  Tv = "TV",
}
