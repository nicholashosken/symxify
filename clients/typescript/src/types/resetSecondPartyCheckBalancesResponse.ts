import { CheckDisbursedReportType } from "./checkDisbursedReportType";
import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";

export interface ResetSecondPartyCheckBalancesResponse extends BaseResponse {
    checkDisbursedReport: CheckDisbursedReportType;
    version1: VersionType;
}