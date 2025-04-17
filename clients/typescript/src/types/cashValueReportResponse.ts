import { CashValueReportType } from "./cashValueReportType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BaseResponse } from "./baseResponse";

export interface CashValueReportResponse extends BaseResponse {
    cashValueReport: CashValueReportType;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}