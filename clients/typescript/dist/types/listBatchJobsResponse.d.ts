import { ListBatchJobsResponseBatchFileList } from "./listBatchJobsResponseBatchFileList";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";
export interface ListBatchJobsResponse extends BaseResponse {
    batchFileList: ListBatchJobsResponseBatchFileList;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
