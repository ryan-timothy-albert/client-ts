/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  catchUnrecognizedEnum,
  OpenEnum,
  Unrecognized,
} from "../../types/enums.js";

export const SampleType = {
  Pretrain: "pretrain",
  Instruct: "instruct",
  BatchRequest: "batch_request",
  BatchResult: "batch_result",
  BatchError: "batch_error",
} as const;
export type SampleType = OpenEnum<typeof SampleType>;

/** @internal */
export const SampleType$inboundSchema: z.ZodType<
  SampleType,
  z.ZodTypeDef,
  unknown
> = z
  .union([
    z.nativeEnum(SampleType),
    z.string().transform(catchUnrecognizedEnum),
  ]);

/** @internal */
export const SampleType$outboundSchema: z.ZodType<
  SampleType,
  z.ZodTypeDef,
  SampleType
> = z.union([
  z.nativeEnum(SampleType),
  z.string().and(z.custom<Unrecognized<string>>()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SampleType$ {
  /** @deprecated use `SampleType$inboundSchema` instead. */
  export const inboundSchema = SampleType$inboundSchema;
  /** @deprecated use `SampleType$outboundSchema` instead. */
  export const outboundSchema = SampleType$outboundSchema;
}
