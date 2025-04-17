import { SecondPartyCheckAdjustType } from "./secondPartyCheckAdjustType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { BalancingBaseRequest } from "./balancingBaseRequest";

export interface SecondPartyCheckAdjustRequest extends BalancingBaseRequest {
    secondPartyCheckAdjust: SecondPartyCheckAdjustType;
    balanceReportFlagValue: boolean;
    balanceReportFlagValueSpecified: boolean;
    balanceReportFlag: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}