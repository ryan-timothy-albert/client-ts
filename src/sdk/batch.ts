/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { MistralJobs } from "./mistraljobs.js";

export class Batch extends ClientSDK {
  private _jobs?: MistralJobs;
  get jobs(): MistralJobs {
    return (this._jobs ??= new MistralJobs(this._options));
  }
}
