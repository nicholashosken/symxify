import { SecondPartyCheckAdjustType } from "./secondPartyCheckAdjustType";
import { VersionType } from "./versionType";
import { BalancingBaseRequest } from "./balancingBaseRequest";
export interface SecondPartyCheckAdjustRequest extends BalancingBaseRequest {
    secondPartyCheckAdjust: SecondPartyCheckAdjustType;
    balanceReportFlag: boolean | null;
    version1: VersionType;
}
