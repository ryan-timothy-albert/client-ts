/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  EmbeddingResponseData,
  EmbeddingResponseData$inboundSchema,
  EmbeddingResponseData$Outbound,
  EmbeddingResponseData$outboundSchema,
} from "./embeddingresponsedata.js";
import {
  UsageInfo,
  UsageInfo$inboundSchema,
  UsageInfo$Outbound,
  UsageInfo$outboundSchema,
} from "./usageinfo.js";

export type EmbeddingResponse = {
  id: string;
  object: string;
  model: string;
  usage: UsageInfo;
  data: Array<EmbeddingResponseData>;
};

/** @internal */
export const EmbeddingResponse$inboundSchema: z.ZodType<
  EmbeddingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  object: z.string(),
  model: z.string(),
  usage: UsageInfo$inboundSchema,
  data: z.array(EmbeddingResponseData$inboundSchema),
});

/** @internal */
export type EmbeddingResponse$Outbound = {
  id: string;
  object: string;
  model: string;
  usage: UsageInfo$Outbound;
  data: Array<EmbeddingResponseData$Outbound>;
};

/** @internal */
export const EmbeddingResponse$outboundSchema: z.ZodType<
  EmbeddingResponse$Outbound,
  z.ZodTypeDef,
  EmbeddingResponse
> = z.object({
  id: z.string(),
  object: z.string(),
  model: z.string(),
  usage: UsageInfo$outboundSchema,
  data: z.array(EmbeddingResponseData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmbeddingResponse$ {
  /** @deprecated use `EmbeddingResponse$inboundSchema` instead. */
  export const inboundSchema = EmbeddingResponse$inboundSchema;
  /** @deprecated use `EmbeddingResponse$outboundSchema` instead. */
  export const outboundSchema = EmbeddingResponse$outboundSchema;
  /** @deprecated use `EmbeddingResponse$Outbound` instead. */
  export type Outbound = EmbeddingResponse$Outbound;
}
