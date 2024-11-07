/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The fine-tuning hyperparameter settings used in a fine-tune job.
 */
export type TrainingParametersIn = {
  /**
   * The number of training steps to perform. A training step refers to a single update of the model weights during the fine-tuning process. This update is typically calculated using a batch of samples from the training dataset.
   */
  trainingSteps?: number | null | undefined;
  /**
   * A parameter describing how much to adjust the pre-trained model's weights in response to the estimated error each time the weights are updated during the fine-tuning process.
   */
  learningRate?: number | undefined;
  /**
   * (Advanced Usage) Weight decay adds a term to the loss function that is proportional to the sum of the squared weights. This term reduces the magnitude of the weights and prevents them from growing too large.
   */
  weightDecay?: number | null | undefined;
  /**
   * (Advanced Usage) A parameter that specifies the percentage of the total training steps at which the learning rate warm-up phase ends. During this phase, the learning rate gradually increases from a small value to the initial learning rate, helping to stabilize the training process and improve convergence. Similar to `pct_start` in [mistral-finetune](https://github.com/mistralai/mistral-finetune)
   */
  warmupFraction?: number | null | undefined;
  epochs?: number | null | undefined;
  fimRatio?: number | null | undefined;
  seqLen?: number | null | undefined;
};

/** @internal */
export const TrainingParametersIn$inboundSchema: z.ZodType<
  TrainingParametersIn,
  z.ZodTypeDef,
  unknown
> = z.object({
  training_steps: z.nullable(z.number().int()).optional(),
  learning_rate: z.number().default(0.0001),
  weight_decay: z.nullable(z.number()).optional(),
  warmup_fraction: z.nullable(z.number()).optional(),
  epochs: z.nullable(z.number()).optional(),
  fim_ratio: z.nullable(z.number()).optional(),
  seq_len: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "training_steps": "trainingSteps",
    "learning_rate": "learningRate",
    "weight_decay": "weightDecay",
    "warmup_fraction": "warmupFraction",
    "fim_ratio": "fimRatio",
    "seq_len": "seqLen",
  });
});

/** @internal */
export type TrainingParametersIn$Outbound = {
  training_steps?: number | null | undefined;
  learning_rate: number;
  weight_decay?: number | null | undefined;
  warmup_fraction?: number | null | undefined;
  epochs?: number | null | undefined;
  fim_ratio?: number | null | undefined;
  seq_len?: number | null | undefined;
};

/** @internal */
export const TrainingParametersIn$outboundSchema: z.ZodType<
  TrainingParametersIn$Outbound,
  z.ZodTypeDef,
  TrainingParametersIn
> = z.object({
  trainingSteps: z.nullable(z.number().int()).optional(),
  learningRate: z.number().default(0.0001),
  weightDecay: z.nullable(z.number()).optional(),
  warmupFraction: z.nullable(z.number()).optional(),
  epochs: z.nullable(z.number()).optional(),
  fimRatio: z.nullable(z.number()).optional(),
  seqLen: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    trainingSteps: "training_steps",
    learningRate: "learning_rate",
    weightDecay: "weight_decay",
    warmupFraction: "warmup_fraction",
    fimRatio: "fim_ratio",
    seqLen: "seq_len",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrainingParametersIn$ {
  /** @deprecated use `TrainingParametersIn$inboundSchema` instead. */
  export const inboundSchema = TrainingParametersIn$inboundSchema;
  /** @deprecated use `TrainingParametersIn$outboundSchema` instead. */
  export const outboundSchema = TrainingParametersIn$outboundSchema;
  /** @deprecated use `TrainingParametersIn$Outbound` instead. */
  export type Outbound = TrainingParametersIn$Outbound;
}
