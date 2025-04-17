import { DepositReportType } from "./depositReportType";
import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";
export interface ResetDepositBalancesResponse extends BaseResponse {
    depositReport: DepositReportType;
    version1: VersionType;
}
