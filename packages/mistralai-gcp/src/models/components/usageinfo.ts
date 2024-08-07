/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UsageInfo = {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
};

/** @internal */
export const UsageInfo$inboundSchema: z.ZodType<UsageInfo, z.ZodTypeDef, unknown> = z
    .object({
        prompt_tokens: z.number().int(),
        completion_tokens: z.number().int(),
        total_tokens: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            prompt_tokens: "promptTokens",
            completion_tokens: "completionTokens",
            total_tokens: "totalTokens",
        });
    });

/** @internal */
export type UsageInfo$Outbound = {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
};

/** @internal */
export const UsageInfo$outboundSchema: z.ZodType<UsageInfo$Outbound, z.ZodTypeDef, UsageInfo> = z
    .object({
        promptTokens: z.number().int(),
        completionTokens: z.number().int(),
        totalTokens: z.number().int(),
    })
    .transform((v) => {
        return remap$(v, {
            promptTokens: "prompt_tokens",
            completionTokens: "completion_tokens",
            totalTokens: "total_tokens",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsageInfo$ {
    /** @deprecated use `UsageInfo$inboundSchema` instead. */
    export const inboundSchema = UsageInfo$inboundSchema;
    /** @deprecated use `UsageInfo$outboundSchema` instead. */
    export const outboundSchema = UsageInfo$outboundSchema;
    /** @deprecated use `UsageInfo$Outbound` instead. */
    export type Outbound = UsageInfo$Outbound;
}
