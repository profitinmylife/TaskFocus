export interface MatchWithMeta {
  data?: {
    meta?: {
      title?: string;
      description?: string;
      [key: string]: unknown;
    };
  };
}

export type RouteMeta = {
  title?: string;
  description?: string;
  [key: string]: string | number | boolean | undefined;
};
