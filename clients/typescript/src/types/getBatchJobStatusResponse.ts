import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";

export interface GetBatchJobStatusResponse extends BaseResponse {
    tokenId: any;
    version1: VersionType;
}