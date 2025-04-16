import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ListBatchJobsResponseBatchFileList {
    batchFileName: string[];
    batchFileNameSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
