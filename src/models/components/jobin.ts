/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    FineTuneableModel,
    FineTuneableModel$inboundSchema,
    FineTuneableModel$outboundSchema,
} from "./finetuneablemodel.js";
import {
    GithubRepositoryIn,
    GithubRepositoryIn$inboundSchema,
    GithubRepositoryIn$Outbound,
    GithubRepositoryIn$outboundSchema,
} from "./githubrepositoryin.js";
import {
    TrainingFile,
    TrainingFile$inboundSchema,
    TrainingFile$Outbound,
    TrainingFile$outboundSchema,
} from "./trainingfile.js";
import {
    TrainingParametersIn,
    TrainingParametersIn$inboundSchema,
    TrainingParametersIn$Outbound,
    TrainingParametersIn$outboundSchema,
} from "./trainingparametersin.js";
import {
    WandbIntegration,
    WandbIntegration$inboundSchema,
    WandbIntegration$Outbound,
    WandbIntegration$outboundSchema,
} from "./wandbintegration.js";
import * as z from "zod";

export type JobIn = {
    /**
     * The name of the model to fine-tune.
     */
    model: FineTuneableModel;
    trainingFiles?: Array<TrainingFile> | undefined;
    /**
     * A list containing the IDs of uploaded files that contain validation data. If you provide these files, the data is used to generate validation metrics periodically during fine-tuning. These metrics can be viewed in `checkpoints` when getting the status of a running fine-tuning job. The same data should not be present in both train and validation files.
     */
    validationFiles?: Array<string> | null | undefined;
    /**
     * The fine-tuning hyperparameter settings used in a fine-tune job.
     */
    hyperparameters: TrainingParametersIn;
    /**
     * A string that will be added to your fine-tuning model name. For example, a suffix of "my-great-model" would produce a model name like `ft:open-mistral-7b:my-great-model:xxx...`
     */
    suffix?: string | null | undefined;
    /**
     * A list of integrations to enable for your fine-tuning job.
     */
    integrations?: Array<WandbIntegration> | null | undefined;
    repositories?: Array<GithubRepositoryIn> | undefined;
    /**
     * This field will be required in a future release.
     */
    autoStart?: boolean | undefined;
};

/** @internal */
export const JobIn$inboundSchema: z.ZodType<JobIn, z.ZodTypeDef, unknown> = z
    .object({
        model: FineTuneableModel$inboundSchema,
        training_files: z.array(TrainingFile$inboundSchema).optional(),
        validation_files: z.nullable(z.array(z.string())).optional(),
        hyperparameters: TrainingParametersIn$inboundSchema,
        suffix: z.nullable(z.string()).optional(),
        integrations: z.nullable(z.array(WandbIntegration$inboundSchema)).optional(),
        repositories: z.array(GithubRepositoryIn$inboundSchema).optional(),
        auto_start: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            training_files: "trainingFiles",
            validation_files: "validationFiles",
            auto_start: "autoStart",
        });
    });

/** @internal */
export type JobIn$Outbound = {
    model: string;
    training_files?: Array<TrainingFile$Outbound> | undefined;
    validation_files?: Array<string> | null | undefined;
    hyperparameters: TrainingParametersIn$Outbound;
    suffix?: string | null | undefined;
    integrations?: Array<WandbIntegration$Outbound> | null | undefined;
    repositories?: Array<GithubRepositoryIn$Outbound> | undefined;
    auto_start?: boolean | undefined;
};

/** @internal */
export const JobIn$outboundSchema: z.ZodType<JobIn$Outbound, z.ZodTypeDef, JobIn> = z
    .object({
        model: FineTuneableModel$outboundSchema,
        trainingFiles: z.array(TrainingFile$outboundSchema).optional(),
        validationFiles: z.nullable(z.array(z.string())).optional(),
        hyperparameters: TrainingParametersIn$outboundSchema,
        suffix: z.nullable(z.string()).optional(),
        integrations: z.nullable(z.array(WandbIntegration$outboundSchema)).optional(),
        repositories: z.array(GithubRepositoryIn$outboundSchema).optional(),
        autoStart: z.boolean().optional(),
    })
    .transform((v) => {
        return remap$(v, {
            trainingFiles: "training_files",
            validationFiles: "validation_files",
            autoStart: "auto_start",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace JobIn$ {
    /** @deprecated use `JobIn$inboundSchema` instead. */
    export const inboundSchema = JobIn$inboundSchema;
    /** @deprecated use `JobIn$outboundSchema` instead. */
    export const outboundSchema = JobIn$outboundSchema;
    /** @deprecated use `JobIn$Outbound` instead. */
    export type Outbound = JobIn$Outbound;
}
