/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { batchJobsCancel } from "../funcs/batchJobsCancel.js";
import { batchJobsCreate } from "../funcs/batchJobsCreate.js";
import { batchJobsGet } from "../funcs/batchJobsGet.js";
import { batchJobsList } from "../funcs/batchJobsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class MistralJobs extends ClientSDK {
  /**
   * Get Batch Jobs
   *
   * @remarks
   * Get a list of batch jobs for your organization and user.
   */
  async list(
    request?: operations.JobsApiRoutesBatchGetBatchJobsRequest | undefined,
    options?: RequestOptions,
  ): Promise<components.BatchJobsOut> {
    return unwrapAsync(batchJobsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Batch Job
   *
   * @remarks
   * Create a new batch job, it will be queued for processing.
   */
  async create(
    request: components.BatchJobIn,
    options?: RequestOptions,
  ): Promise<components.BatchJobOut> {
    return unwrapAsync(batchJobsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Batch Job
   *
   * @remarks
   * Get a batch job details by its UUID.
   */
  async get(
    request: operations.JobsApiRoutesBatchGetBatchJobRequest,
    options?: RequestOptions,
  ): Promise<components.BatchJobOut> {
    return unwrapAsync(batchJobsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Cancel Batch Job
   *
   * @remarks
   * Request the cancellation of a batch job.
   */
  async cancel(
    request: operations.JobsApiRoutesBatchCancelBatchJobRequest,
    options?: RequestOptions,
  ): Promise<components.BatchJobOut> {
    return unwrapAsync(batchJobsCancel(
      this,
      request,
      options,
    ));
  }
}
