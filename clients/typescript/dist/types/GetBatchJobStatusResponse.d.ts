import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";
export interface GetBatchJobStatusResponse extends BaseResponse {
    tokenId: any;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
