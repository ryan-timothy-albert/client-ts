/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type FunctionT = {
    name: string;
    description?: string | undefined;
    parameters: { [k: string]: any };
};

/** @internal */
export const FunctionT$inboundSchema: z.ZodType<FunctionT, z.ZodTypeDef, unknown> = z.object({
    name: z.string(),
    description: z.string().default(""),
    parameters: z.record(z.any()),
});

/** @internal */
export type FunctionT$Outbound = {
    name: string;
    description: string;
    parameters: { [k: string]: any };
};

/** @internal */
export const FunctionT$outboundSchema: z.ZodType<FunctionT$Outbound, z.ZodTypeDef, FunctionT> =
    z.object({
        name: z.string(),
        description: z.string().default(""),
        parameters: z.record(z.any()),
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FunctionT$ {
    /** @deprecated use `FunctionT$inboundSchema` instead. */
    export const inboundSchema = FunctionT$inboundSchema;
    /** @deprecated use `FunctionT$outboundSchema` instead. */
    export const outboundSchema = FunctionT$outboundSchema;
    /** @deprecated use `FunctionT$Outbound` instead. */
    export type Outbound = FunctionT$Outbound;
}
