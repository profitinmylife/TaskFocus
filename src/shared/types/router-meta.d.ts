import 'react-router-dom';

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

declare module 'react-router-dom' {
  interface RouteObject {
    meta?: RouteMeta;
  }
  interface IndexRouteObject {
    meta?: RouteMeta;
  }
  interface NonIndexRouteObject {
    meta?: RouteMeta;
  }
}
