import { VersionType } from "./versionType";
import { BatchJobsBaseRequest } from "./batchJobsBaseRequest";
export interface ExecuteBatchJobRequest extends BatchJobsBaseRequest {
    async: boolean | null;
    jobName: string;
    version1: VersionType;
}
