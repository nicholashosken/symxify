import { CheckDisbursedReportType } from "./checkDisbursedReportType";
import { VersionType } from "./versionType";
import { BaseResponse } from "./baseResponse";
export interface SecondPartyCheckAdjustResponse extends BaseResponse {
    checkDisbursedReport: CheckDisbursedReportType;
    version1: VersionType;
}
