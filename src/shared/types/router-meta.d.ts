import 'react-router-dom';
import type { RouteMeta } from '/router.ts';

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
