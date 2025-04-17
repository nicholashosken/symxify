import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";

export interface ExecuteBatchJobResponse extends BaseResponse {
    tokenId: string;
    version1: VersionType;
}