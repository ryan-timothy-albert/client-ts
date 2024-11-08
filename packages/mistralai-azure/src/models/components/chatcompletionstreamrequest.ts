/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  AssistantMessage,
  AssistantMessage$inboundSchema,
  AssistantMessage$Outbound,
  AssistantMessage$outboundSchema,
} from "./assistantmessage.js";
import {
  ResponseFormat,
  ResponseFormat$inboundSchema,
  ResponseFormat$Outbound,
  ResponseFormat$outboundSchema,
} from "./responseformat.js";
import {
  SystemMessage,
  SystemMessage$inboundSchema,
  SystemMessage$Outbound,
  SystemMessage$outboundSchema,
} from "./systemmessage.js";
import {
  Tool,
  Tool$inboundSchema,
  Tool$Outbound,
  Tool$outboundSchema,
} from "./tool.js";
import {
  ToolChoice,
  ToolChoice$inboundSchema,
  ToolChoice$Outbound,
  ToolChoice$outboundSchema,
} from "./toolchoice.js";
import {
  ToolChoiceEnum,
  ToolChoiceEnum$inboundSchema,
  ToolChoiceEnum$outboundSchema,
} from "./toolchoiceenum.js";
import {
  ToolMessage,
  ToolMessage$inboundSchema,
  ToolMessage$Outbound,
  ToolMessage$outboundSchema,
} from "./toolmessage.js";
import {
  UserMessage,
  UserMessage$inboundSchema,
  UserMessage$Outbound,
  UserMessage$outboundSchema,
} from "./usermessage.js";

/**
 * Stop generation if this token is detected. Or if one of these tokens is detected when providing an array
 */
export type Stop = string | Array<string>;

export type Messages =
  | (SystemMessage & { role: "system" })
  | (UserMessage & { role: "user" })
  | (AssistantMessage & { role: "assistant" })
  | (ToolMessage & { role: "tool" });

export type ChatCompletionStreamRequestToolChoice = ToolChoice | ToolChoiceEnum;

export type ChatCompletionStreamRequest = {
  /**
   * The ID of the model to use for this request.
   */
  model?: string | null | undefined;
  /**
   * What sampling temperature to use, we recommend between 0.0 and 0.7. Higher values like 0.7 will make the output more random, while lower values like 0.2 will make it more focused and deterministic. We generally recommend altering this or `top_p` but not both. The default value varies depending on the model you are targeting. Call the `/models` endpoint to retrieve the appropriate value.
   */
  temperature?: number | null | undefined;
  /**
   * Nucleus sampling, where the model considers the results of the tokens with `top_p` probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered. We generally recommend altering this or `temperature` but not both.
   */
  topP?: number | undefined;
  /**
   * The maximum number of tokens to generate in the completion. The token count of your prompt plus `max_tokens` cannot exceed the model's context length.
   */
  maxTokens?: number | null | undefined;
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
   * The prompt(s) to generate completions for, encoded as a list of dict with role and content.
   */
  messages: Array<
    | (SystemMessage & { role: "system" })
    | (UserMessage & { role: "user" })
    | (AssistantMessage & { role: "assistant" })
    | (ToolMessage & { role: "tool" })
  >;
  responseFormat?: ResponseFormat | undefined;
  tools?: Array<Tool> | null | undefined;
  toolChoice?: ToolChoice | ToolChoiceEnum | undefined;
  /**
   * presence_penalty determines how much the model penalizes the repetition of words or phrases. A higher presence penalty encourages the model to use a wider variety of words and phrases, making the output more diverse and creative.
   */
  presencePenalty?: number | undefined;
  /**
   * frequency_penalty penalizes the repetition of words based on their frequency in the generated text. A higher frequency penalty discourages the model from repeating words that have already appeared frequently in the output, promoting diversity and reducing repetition.
   */
  frequencyPenalty?: number | undefined;
  /**
   * Number of completions to return for each request, input tokens are only billed once.
   */
  n?: number | null | undefined;
  /**
   * Whether to inject a safety prompt before all conversations.
   */
  safePrompt?: boolean | undefined;
};

/** @internal */
export const Stop$inboundSchema: z.ZodType<Stop, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.array(z.string())]);

/** @internal */
export type Stop$Outbound = string | Array<string>;

/** @internal */
export const Stop$outboundSchema: z.ZodType<Stop$Outbound, z.ZodTypeDef, Stop> =
  z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Stop$ {
  /** @deprecated use `Stop$inboundSchema` instead. */
  export const inboundSchema = Stop$inboundSchema;
  /** @deprecated use `Stop$outboundSchema` instead. */
  export const outboundSchema = Stop$outboundSchema;
  /** @deprecated use `Stop$Outbound` instead. */
  export type Outbound = Stop$Outbound;
}

/** @internal */
export const Messages$inboundSchema: z.ZodType<
  Messages,
  z.ZodTypeDef,
  unknown
> = z.union([
  SystemMessage$inboundSchema.and(
    z.object({ role: z.literal("system") }).transform((v) => ({
      role: v.role,
    })),
  ),
  UserMessage$inboundSchema.and(
    z.object({ role: z.literal("user") }).transform((v) => ({ role: v.role })),
  ),
  AssistantMessage$inboundSchema.and(
    z.object({ role: z.literal("assistant") }).transform((v) => ({
      role: v.role,
    })),
  ),
  ToolMessage$inboundSchema.and(
    z.object({ role: z.literal("tool") }).transform((v) => ({ role: v.role })),
  ),
]);

/** @internal */
export type Messages$Outbound =
  | (SystemMessage$Outbound & { role: "system" })
  | (UserMessage$Outbound & { role: "user" })
  | (AssistantMessage$Outbound & { role: "assistant" })
  | (ToolMessage$Outbound & { role: "tool" });

/** @internal */
export const Messages$outboundSchema: z.ZodType<
  Messages$Outbound,
  z.ZodTypeDef,
  Messages
> = z.union([
  SystemMessage$outboundSchema.and(
    z.object({ role: z.literal("system") }).transform((v) => ({
      role: v.role,
    })),
  ),
  UserMessage$outboundSchema.and(
    z.object({ role: z.literal("user") }).transform((v) => ({ role: v.role })),
  ),
  AssistantMessage$outboundSchema.and(
    z.object({ role: z.literal("assistant") }).transform((v) => ({
      role: v.role,
    })),
  ),
  ToolMessage$outboundSchema.and(
    z.object({ role: z.literal("tool") }).transform((v) => ({ role: v.role })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Messages$ {
  /** @deprecated use `Messages$inboundSchema` instead. */
  export const inboundSchema = Messages$inboundSchema;
  /** @deprecated use `Messages$outboundSchema` instead. */
  export const outboundSchema = Messages$outboundSchema;
  /** @deprecated use `Messages$Outbound` instead. */
  export type Outbound = Messages$Outbound;
}

/** @internal */
export const ChatCompletionStreamRequestToolChoice$inboundSchema: z.ZodType<
  ChatCompletionStreamRequestToolChoice,
  z.ZodTypeDef,
  unknown
> = z.union([ToolChoice$inboundSchema, ToolChoiceEnum$inboundSchema]);

/** @internal */
export type ChatCompletionStreamRequestToolChoice$Outbound =
  | ToolChoice$Outbound
  | string;

/** @internal */
export const ChatCompletionStreamRequestToolChoice$outboundSchema: z.ZodType<
  ChatCompletionStreamRequestToolChoice$Outbound,
  z.ZodTypeDef,
  ChatCompletionStreamRequestToolChoice
> = z.union([ToolChoice$outboundSchema, ToolChoiceEnum$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionStreamRequestToolChoice$ {
  /** @deprecated use `ChatCompletionStreamRequestToolChoice$inboundSchema` instead. */
  export const inboundSchema =
    ChatCompletionStreamRequestToolChoice$inboundSchema;
  /** @deprecated use `ChatCompletionStreamRequestToolChoice$outboundSchema` instead. */
  export const outboundSchema =
    ChatCompletionStreamRequestToolChoice$outboundSchema;
  /** @deprecated use `ChatCompletionStreamRequestToolChoice$Outbound` instead. */
  export type Outbound = ChatCompletionStreamRequestToolChoice$Outbound;
}

/** @internal */
export const ChatCompletionStreamRequest$inboundSchema: z.ZodType<
  ChatCompletionStreamRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.nullable(z.string().default("azureai")),
  temperature: z.nullable(z.number()).optional(),
  top_p: z.number().default(1),
  max_tokens: z.nullable(z.number().int()).optional(),
  stream: z.boolean().default(true),
  stop: z.union([z.string(), z.array(z.string())]).optional(),
  random_seed: z.nullable(z.number().int()).optional(),
  messages: z.array(
    z.union([
      SystemMessage$inboundSchema.and(
        z.object({ role: z.literal("system") }).transform((v) => ({
          role: v.role,
        })),
      ),
      UserMessage$inboundSchema.and(
        z.object({ role: z.literal("user") }).transform((v) => ({
          role: v.role,
        })),
      ),
      AssistantMessage$inboundSchema.and(
        z.object({ role: z.literal("assistant") }).transform((v) => ({
          role: v.role,
        })),
      ),
      ToolMessage$inboundSchema.and(
        z.object({ role: z.literal("tool") }).transform((v) => ({
          role: v.role,
        })),
      ),
    ]),
  ),
  response_format: ResponseFormat$inboundSchema.optional(),
  tools: z.nullable(z.array(Tool$inboundSchema)).optional(),
  tool_choice: z.union([ToolChoice$inboundSchema, ToolChoiceEnum$inboundSchema])
    .optional(),
  presence_penalty: z.number().optional(),
  frequency_penalty: z.number().optional(),
  n: z.nullable(z.number().int()).optional(),
  safe_prompt: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "top_p": "topP",
    "max_tokens": "maxTokens",
    "random_seed": "randomSeed",
    "response_format": "responseFormat",
    "tool_choice": "toolChoice",
    "presence_penalty": "presencePenalty",
    "frequency_penalty": "frequencyPenalty",
    "safe_prompt": "safePrompt",
  });
});

/** @internal */
export type ChatCompletionStreamRequest$Outbound = {
  model: string | null;
  temperature?: number | null | undefined;
  top_p: number;
  max_tokens?: number | null | undefined;
  stream: boolean;
  stop?: string | Array<string> | undefined;
  random_seed?: number | null | undefined;
  messages: Array<
    | (SystemMessage$Outbound & { role: "system" })
    | (UserMessage$Outbound & { role: "user" })
    | (AssistantMessage$Outbound & { role: "assistant" })
    | (ToolMessage$Outbound & { role: "tool" })
  >;
  response_format?: ResponseFormat$Outbound | undefined;
  tools?: Array<Tool$Outbound> | null | undefined;
  tool_choice?: ToolChoice$Outbound | string | undefined;
  presence_penalty?: number | undefined;
  frequency_penalty?: number | undefined;
  n?: number | null | undefined;
  safe_prompt: boolean;
};

/** @internal */
export const ChatCompletionStreamRequest$outboundSchema: z.ZodType<
  ChatCompletionStreamRequest$Outbound,
  z.ZodTypeDef,
  ChatCompletionStreamRequest
> = z.object({
  model: z.nullable(z.string().default("azureai")),
  temperature: z.nullable(z.number()).optional(),
  topP: z.number().default(1),
  maxTokens: z.nullable(z.number().int()).optional(),
  stream: z.boolean().default(true),
  stop: z.union([z.string(), z.array(z.string())]).optional(),
  randomSeed: z.nullable(z.number().int()).optional(),
  messages: z.array(
    z.union([
      SystemMessage$outboundSchema.and(
        z.object({ role: z.literal("system") }).transform((v) => ({
          role: v.role,
        })),
      ),
      UserMessage$outboundSchema.and(
        z.object({ role: z.literal("user") }).transform((v) => ({
          role: v.role,
        })),
      ),
      AssistantMessage$outboundSchema.and(
        z.object({ role: z.literal("assistant") }).transform((v) => ({
          role: v.role,
        })),
      ),
      ToolMessage$outboundSchema.and(
        z.object({ role: z.literal("tool") }).transform((v) => ({
          role: v.role,
        })),
      ),
    ]),
  ),
  responseFormat: ResponseFormat$outboundSchema.optional(),
  tools: z.nullable(z.array(Tool$outboundSchema)).optional(),
  toolChoice: z.union([
    ToolChoice$outboundSchema,
    ToolChoiceEnum$outboundSchema,
  ]).optional(),
  presencePenalty: z.number().optional(),
  frequencyPenalty: z.number().optional(),
  n: z.nullable(z.number().int()).optional(),
  safePrompt: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    topP: "top_p",
    maxTokens: "max_tokens",
    randomSeed: "random_seed",
    responseFormat: "response_format",
    toolChoice: "tool_choice",
    presencePenalty: "presence_penalty",
    frequencyPenalty: "frequency_penalty",
    safePrompt: "safe_prompt",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ChatCompletionStreamRequest$ {
  /** @deprecated use `ChatCompletionStreamRequest$inboundSchema` instead. */
  export const inboundSchema = ChatCompletionStreamRequest$inboundSchema;
  /** @deprecated use `ChatCompletionStreamRequest$outboundSchema` instead. */
  export const outboundSchema = ChatCompletionStreamRequest$outboundSchema;
  /** @deprecated use `ChatCompletionStreamRequest$Outbound` instead. */
  export type Outbound = ChatCompletionStreamRequest$Outbound;
}
