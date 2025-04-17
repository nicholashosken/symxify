import { ListBatchJobsResponseBatchFileList } from "./listBatchJobsResponseBatchFileList";
import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";

export interface ListBatchJobsResponse extends BaseResponse {
    batchFileList: ListBatchJobsResponseBatchFileList;
    version1: VersionType;
}