import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";

export interface ExecuteBatchJobResponse extends BaseResponse {
    tokenId: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}