/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * Stop generation if this token is detected. Or if one of these tokens is detected when providing an array
 */
export type FIMCompletionStreamRequestStop = string | Array<string>;

export type FIMCompletionStreamRequest = {
    /**
     * ID of the model to use. Only compatible for now with:
     *
     * @remarks
     *   - `codestral-2405`
     *   - `codestral-latest`
     */
    model: string | null;
    /**
     * What sampling temperature to use, between 0.0 and 1.0. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both.
     */
    temperature?: number | undefined;
    /**
     * Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.
     */
    topP?: number | undefined;
    /**
     * The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.
     */
    maxTokens?: number | null | undefined;
    /**
     * The minimum number of tokens to generate in the completion.
     */
    minTokens?: number | null | undefined;
    stream?: boolean | undefined;
    /**
     * Stop generation if this token is detected. Or if one of these tokens is detected when providing an array
     */
    stop?: string | Array<string> | undefined;
    /**
     * The seed to use for random sampling. If set, different calls will generate deterministic results.
     */
    randomSeed?: number | null | undefined;
    /**
     * The text/code to complete.
     */
    prompt: string;
    /**
     * Optional text/code that adds more context for the model. When given a `prompt` and a `suffix` the model will fill what is between them. When `suffix` is not provided, the model will simply execute completion starting with `prompt`.
     */
    suffix?: string | null | undefined;
};

/** @internal */
export const FIMCompletionStreamRequestStop$inboundSchema: z.ZodType<
    FIMCompletionStreamRequestStop,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type FIMCompletionStreamRequestStop$Outbound = string | Array<string>;

/** @internal */
export const FIMCompletionStreamRequestStop$outboundSchema: z.ZodType<
    FIMCompletionStreamRequestStop$Outbound,
    z.ZodTypeDef,
    FIMCompletionStreamRequestStop
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FIMCompletionStreamRequestStop$ {
    /** @deprecated use `FIMCompletionStreamRequestStop$inboundSchema` instead. */
    export const inboundSchema = FIMCompletionStreamRequestStop$inboundSchema;
    /** @deprecated use `FIMCompletionStreamRequestStop$outboundSchema` instead. */
    export const outboundSchema = FIMCompletionStreamRequestStop$outboundSchema;
    /** @deprecated use `FIMCompletionStreamRequestStop$Outbound` instead. */
    export type Outbound = FIMCompletionStreamRequestStop$Outbound;
}

/** @internal */
export const FIMCompletionStreamRequest$inboundSchema: z.ZodType<
    FIMCompletionStreamRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        model: z.nullable(z.string()),
        temperature: z.number().default(0.7),
        top_p: z.number().default(1),
        max_tokens: z.nullable(z.number().int()).optional(),
        min_tokens: z.nullable(z.number().int()).optional(),
        stream: z.boolean().default(true),
        stop: z.union([z.string(), z.array(z.string())]).optional(),
        random_seed: z.nullable(z.number().int()).optional(),
        prompt: z.string(),
        suffix: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            top_p: "topP",
            max_tokens: "maxTokens",
            min_tokens: "minTokens",
            random_seed: "randomSeed",
        });
    });

/** @internal */
export type FIMCompletionStreamRequest$Outbound = {
    model: string | null;
    temperature: number;
    top_p: number;
    max_tokens?: number | null | undefined;
    min_tokens?: number | null | undefined;
    stream: boolean;
    stop?: string | Array<string> | undefined;
    random_seed?: number | null | undefined;
    prompt: string;
    suffix?: string | null | undefined;
};

/** @internal */
export const FIMCompletionStreamRequest$outboundSchema: z.ZodType<
    FIMCompletionStreamRequest$Outbound,
    z.ZodTypeDef,
    FIMCompletionStreamRequest
> = z
    .object({
        model: z.nullable(z.string()),
        temperature: z.number().default(0.7),
        topP: z.number().default(1),
        maxTokens: z.nullable(z.number().int()).optional(),
        minTokens: z.nullable(z.number().int()).optional(),
        stream: z.boolean().default(true),
        stop: z.union([z.string(), z.array(z.string())]).optional(),
        randomSeed: z.nullable(z.number().int()).optional(),
        prompt: z.string(),
        suffix: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            topP: "top_p",
            maxTokens: "max_tokens",
            minTokens: "min_tokens",
            randomSeed: "random_seed",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FIMCompletionStreamRequest$ {
    /** @deprecated use `FIMCompletionStreamRequest$inboundSchema` instead. */
    export const inboundSchema = FIMCompletionStreamRequest$inboundSchema;
    /** @deprecated use `FIMCompletionStreamRequest$outboundSchema` instead. */
    export const outboundSchema = FIMCompletionStreamRequest$outboundSchema;
    /** @deprecated use `FIMCompletionStreamRequest$Outbound` instead. */
    export type Outbound = FIMCompletionStreamRequest$Outbound;
}
