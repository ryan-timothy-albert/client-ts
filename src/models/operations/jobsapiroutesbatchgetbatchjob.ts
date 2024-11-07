/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type JobsApiRoutesBatchGetBatchJobRequest = {
  jobId: string;
};

/** @internal */
export const JobsApiRoutesBatchGetBatchJobRequest$inboundSchema: z.ZodType<
  JobsApiRoutesBatchGetBatchJobRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "job_id": "jobId",
  });
});

/** @internal */
export type JobsApiRoutesBatchGetBatchJobRequest$Outbound = {
  job_id: string;
};

/** @internal */
export const JobsApiRoutesBatchGetBatchJobRequest$outboundSchema: z.ZodType<
  JobsApiRoutesBatchGetBatchJobRequest$Outbound,
  z.ZodTypeDef,
  JobsApiRoutesBatchGetBatchJobRequest
> = z.object({
  jobId: z.string(),
}).transform((v) => {
  return remap$(v, {
    jobId: "job_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobsApiRoutesBatchGetBatchJobRequest$ {
  /** @deprecated use `JobsApiRoutesBatchGetBatchJobRequest$inboundSchema` instead. */
  export const inboundSchema =
    JobsApiRoutesBatchGetBatchJobRequest$inboundSchema;
  /** @deprecated use `JobsApiRoutesBatchGetBatchJobRequest$outboundSchema` instead. */
  export const outboundSchema =
    JobsApiRoutesBatchGetBatchJobRequest$outboundSchema;
  /** @deprecated use `JobsApiRoutesBatchGetBatchJobRequest$Outbound` instead. */
  export type Outbound = JobsApiRoutesBatchGetBatchJobRequest$Outbound;
}
