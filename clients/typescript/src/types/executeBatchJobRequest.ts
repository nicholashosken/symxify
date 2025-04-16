import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BatchJobsBaseRequest } from "./batchJobsBaseRequest";

export interface ExecuteBatchJobRequest extends BatchJobsBaseRequest {
    asyncValue: boolean;
    asyncValueSpecified: boolean;
    async: boolean | null;
    jobName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}