import type { IpAddress, Option, ServerOptions } from "effect";

export type TsgoIpAddress = IpAddress;

export type TsgoOptionNumber = Option<number>;

export type TsgoServerOptions = ServerOptions;

export type TsgoOwnPipeable = {
  _tag: "Own";
  pipe: () => string;
  toString: () => string;
  "~own/marker": true;
};

import { succeed, xForwardedHeaders } from "effect";

export const tsgoXForwarded = xForwardedHeaders;

export const tsgoSucceeded = succeed({ id: 1, name: "a" });
