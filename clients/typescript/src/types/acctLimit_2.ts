import { AcctLimitLimitDescription_2 } from "./acctLimitLimitDescription_2";
import { AcctLimitLimitSourceCodes_2 } from "./acctLimitLimitSourceCodes_2";
import { AcctLimitLimitTransactionSubType_2 } from "./acctLimitLimitTransactionSubType_2";
import { AcctLimitLimitTransactionType_2 } from "./acctLimitLimitTransactionType_2";
import { AcctLimitWarningCodeList_2 } from "./acctLimitWarningCodeList_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctLimit_2 {
    limitDescription: AcctLimitLimitDescription_2[];
    limitDescriptionSpecified: boolean;
    limitSourceCodes: AcctLimitLimitSourceCodes_2[];
    limitSourceCodesSpecified: boolean;
    limitTransactionSubType: AcctLimitLimitTransactionSubType_2[];
    limitTransactionSubTypeSpecified: boolean;
    limitTransactionType: AcctLimitLimitTransactionType_2[];
    limitTransactionTypeSpecified: boolean;
    warningCodeList: AcctLimitWarningCodeList_2[];
    warningCodeListSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}