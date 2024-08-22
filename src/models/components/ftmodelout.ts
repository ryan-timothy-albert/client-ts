/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    FTModelCapabilitiesOut,
    FTModelCapabilitiesOut$inboundSchema,
    FTModelCapabilitiesOut$Outbound,
    FTModelCapabilitiesOut$outboundSchema,
} from "./ftmodelcapabilitiesout.js";
import * as z from "zod";

export const FTModelOutObject = {
    Model: "model",
} as const;
export type FTModelOutObject = ClosedEnum<typeof FTModelOutObject>;

export type FTModelOut = {
    id: string;
    object?: "model" | undefined;
    created: number;
    ownedBy: string;
    root: string;
    archived: boolean;
    name?: string | null | undefined;
    description?: string | null | undefined;
    capabilities: FTModelCapabilitiesOut;
    maxContextLength?: number | undefined;
    aliases?: Array<string> | undefined;
    job: string;
};

/** @internal */
export const FTModelOutObject$inboundSchema: z.ZodNativeEnum<typeof FTModelOutObject> =
    z.nativeEnum(FTModelOutObject);

/** @internal */
export const FTModelOutObject$outboundSchema: z.ZodNativeEnum<typeof FTModelOutObject> =
    FTModelOutObject$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FTModelOutObject$ {
    /** @deprecated use `FTModelOutObject$inboundSchema` instead. */
    export const inboundSchema = FTModelOutObject$inboundSchema;
    /** @deprecated use `FTModelOutObject$outboundSchema` instead. */
    export const outboundSchema = FTModelOutObject$outboundSchema;
}

/** @internal */
export const FTModelOut$inboundSchema: z.ZodType<FTModelOut, z.ZodTypeDef, unknown> = z
    .object({
        id: z.string(),
        object: z.literal("model").default("model"),
        created: z.number().int(),
        owned_by: z.string(),
        root: z.string(),
        archived: z.boolean(),
        name: z.nullable(z.string()).optional(),
        description: z.nullable(z.string()).optional(),
        capabilities: FTModelCapabilitiesOut$inboundSchema,
        max_context_length: z.number().int().default(32768),
        aliases: z.array(z.string()).optional(),
        job: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            owned_by: "ownedBy",
            max_context_length: "maxContextLength",
        });
    });

/** @internal */
export type FTModelOut$Outbound = {
    id: string;
    object: "model";
    created: number;
    owned_by: string;
    root: string;
    archived: boolean;
    name?: string | null | undefined;
    description?: string | null | undefined;
    capabilities: FTModelCapabilitiesOut$Outbound;
    max_context_length: number;
    aliases?: Array<string> | undefined;
    job: string;
};

/** @internal */
export const FTModelOut$outboundSchema: z.ZodType<FTModelOut$Outbound, z.ZodTypeDef, FTModelOut> = z
    .object({
        id: z.string(),
        object: z.literal("model").default("model"),
        created: z.number().int(),
        ownedBy: z.string(),
        root: z.string(),
        archived: z.boolean(),
        name: z.nullable(z.string()).optional(),
        description: z.nullable(z.string()).optional(),
        capabilities: FTModelCapabilitiesOut$outboundSchema,
        maxContextLength: z.number().int().default(32768),
        aliases: z.array(z.string()).optional(),
        job: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            ownedBy: "owned_by",
            maxContextLength: "max_context_length",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FTModelOut$ {
    /** @deprecated use `FTModelOut$inboundSchema` instead. */
    export const inboundSchema = FTModelOut$inboundSchema;
    /** @deprecated use `FTModelOut$outboundSchema` instead. */
    export const outboundSchema = FTModelOut$outboundSchema;
    /** @deprecated use `FTModelOut$Outbound` instead. */
    export type Outbound = FTModelOut$Outbound;
}
