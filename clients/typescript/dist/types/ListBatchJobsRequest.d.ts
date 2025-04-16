import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BatchJobsBaseRequest } from "./batchJobsBaseRequest";
export interface ListBatchJobsRequest extends BatchJobsBaseRequest {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
