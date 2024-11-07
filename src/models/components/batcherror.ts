/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BatchError = {
  message: string;
  count?: number | undefined;
};

/** @internal */
export const BatchError$inboundSchema: z.ZodType<
  BatchError,
  z.ZodTypeDef,
  unknown
> = z.object({
  message: z.string(),
  count: z.number().int().default(1),
});

/** @internal */
export type BatchError$Outbound = {
  message: string;
  count: number;
};

/** @internal */
export const BatchError$outboundSchema: z.ZodType<
  BatchError$Outbound,
  z.ZodTypeDef,
  BatchError
> = z.object({
  message: z.string(),
  count: z.number().int().default(1),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BatchError$ {
  /** @deprecated use `BatchError$inboundSchema` instead. */
  export const inboundSchema = BatchError$inboundSchema;
  /** @deprecated use `BatchError$outboundSchema` instead. */
  export const outboundSchema = BatchError$outboundSchema;
  /** @deprecated use `BatchError$Outbound` instead. */
  export type Outbound = BatchError$Outbound;
}
