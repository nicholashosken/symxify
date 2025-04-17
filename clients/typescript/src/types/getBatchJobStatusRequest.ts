import { VersionType } from "./versionType";
import { BatchJobsBaseRequest } from "./batchJobsBaseRequest";

export interface GetBatchJobStatusRequest extends BatchJobsBaseRequest {
    tokenId: string;
    version1: VersionType;
}