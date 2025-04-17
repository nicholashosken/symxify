import { CheckDisbursedReportType } from "./checkDisbursedReportType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";

export interface ResetSecondPartyCheckBalancesResponse extends BaseResponse {
    checkDisbursedReport: CheckDisbursedReportType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}