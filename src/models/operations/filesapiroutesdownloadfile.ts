/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type FilesApiRoutesDownloadFileRequest = {
  fileId: string;
};

/** @internal */
export const FilesApiRoutesDownloadFileRequest$inboundSchema: z.ZodType<
  FilesApiRoutesDownloadFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  file_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "file_id": "fileId",
  });
});

/** @internal */
export type FilesApiRoutesDownloadFileRequest$Outbound = {
  file_id: string;
};

/** @internal */
export const FilesApiRoutesDownloadFileRequest$outboundSchema: z.ZodType<
  FilesApiRoutesDownloadFileRequest$Outbound,
  z.ZodTypeDef,
  FilesApiRoutesDownloadFileRequest
> = z.object({
  fileId: z.string(),
}).transform((v) => {
  return remap$(v, {
    fileId: "file_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilesApiRoutesDownloadFileRequest$ {
  /** @deprecated use `FilesApiRoutesDownloadFileRequest$inboundSchema` instead. */
  export const inboundSchema = FilesApiRoutesDownloadFileRequest$inboundSchema;
  /** @deprecated use `FilesApiRoutesDownloadFileRequest$outboundSchema` instead. */
  export const outboundSchema =
    FilesApiRoutesDownloadFileRequest$outboundSchema;
  /** @deprecated use `FilesApiRoutesDownloadFileRequest$Outbound` instead. */
  export type Outbound = FilesApiRoutesDownloadFileRequest$Outbound;
}
