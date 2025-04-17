import { VersionType } from "./versionType";
import { BatchJobsBaseRequest } from "./batchJobsBaseRequest";
export interface ListBatchJobsRequest extends BatchJobsBaseRequest {
    version1: VersionType;
}
