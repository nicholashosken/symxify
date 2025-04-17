import { AcctLimitLimitDescription_2 } from "./acctLimitLimitDescription_2";
import { AcctLimitLimitSourceCodes_2 } from "./acctLimitLimitSourceCodes_2";
import { AcctLimitLimitTransactionSubType_2 } from "./acctLimitLimitTransactionSubType_2";
import { AcctLimitLimitTransactionType_2 } from "./acctLimitLimitTransactionType_2";
import { AcctLimitWarningCodeList_2 } from "./acctLimitWarningCodeList_2";
import { VersionType } from "./versionType";
export interface AcctLimit_2 {
    limitDescription: AcctLimitLimitDescription_2[];
    limitSourceCodes: AcctLimitLimitSourceCodes_2[];
    limitTransactionSubType: AcctLimitLimitTransactionSubType_2[];
    limitTransactionType: AcctLimitLimitTransactionType_2[];
    warningCodeList: AcctLimitWarningCodeList_2[];
    version1: VersionType;
}
