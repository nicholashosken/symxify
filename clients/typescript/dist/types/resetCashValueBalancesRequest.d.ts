import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BalancingBaseRequest } from "./balancingBaseRequest";
export interface ResetCashValueBalancesRequest extends BalancingBaseRequest {
    balanceReportFlagValue: boolean;
    balanceReportFlagValueSpecified: boolean;
    balanceReportFlag: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
