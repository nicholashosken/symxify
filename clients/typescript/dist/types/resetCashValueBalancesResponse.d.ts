import { CashValueReportType } from "./cashValueReportType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";
export interface ResetCashValueBalancesResponse extends BaseResponse {
    cashValueReport: CashValueReportType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
