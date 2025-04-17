import { CashValueAdjustType } from "./cashValueAdjustType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BalancingBaseRequest } from "./balancingBaseRequest";
export interface CashValueAdjustRequest extends BalancingBaseRequest {
    cashValueAdjustInput: CashValueAdjustType;
    balanceReportFlagValue: boolean;
    balanceReportFlagValueSpecified: boolean;
    balanceReportFlag: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
