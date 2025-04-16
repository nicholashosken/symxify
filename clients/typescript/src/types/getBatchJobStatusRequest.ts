import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BatchJobsBaseRequest } from "./batchJobsBaseRequest";

export interface GetBatchJobStatusRequest extends BatchJobsBaseRequest {
    tokenId: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}