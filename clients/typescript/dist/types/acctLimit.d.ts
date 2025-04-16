import { AcctLimitLimitDescription } from "./acctLimitLimitDescription";
import { AcctLimitLimitSourceCodes } from "./acctLimitLimitSourceCodes";
import { AcctLimitLimitTransactionSubType } from "./acctLimitLimitTransactionSubType";
import { AcctLimitLimitTransactionType } from "./acctLimitLimitTransactionType";
import { AcctLimitWarningCodeList } from "./acctLimitWarningCodeList";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctLimit {
    limitDescription: AcctLimitLimitDescription[];
    limitDescriptionSpecified: boolean;
    limitSourceCodes: AcctLimitLimitSourceCodes[];
    limitSourceCodesSpecified: boolean;
    limitTransactionSubType: AcctLimitLimitTransactionSubType[];
    limitTransactionSubTypeSpecified: boolean;
    limitTransactionType: AcctLimitLimitTransactionType[];
    limitTransactionTypeSpecified: boolean;
    warningCodeList: AcctLimitWarningCodeList[];
    warningCodeListSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
