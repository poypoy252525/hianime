export interface HianimeSources {
  sources?: Source[];
  tracks?: Track[];
  encrypted?: boolean;
  intro?: Tro;
  outro?: Tro;
  server?: number;
}

export interface Tro {
  start?: number;
  end?: number;
}

export interface Source {
  file?: string;
  type?: string;
}

export interface Track {
  file?: string;
  label?: string;
  kind?: string;
  default?: boolean;
}
