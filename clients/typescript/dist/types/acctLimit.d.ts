import { AcctLimitLimitDescription } from "./acctLimitLimitDescription";
import { AcctLimitLimitSourceCodes } from "./acctLimitLimitSourceCodes";
import { AcctLimitLimitTransactionSubType } from "./acctLimitLimitTransactionSubType";
import { AcctLimitLimitTransactionType } from "./acctLimitLimitTransactionType";
import { AcctLimitWarningCodeList } from "./acctLimitWarningCodeList";
import { VersionType } from "./versionType";
export interface AcctLimit {
    limitDescription: AcctLimitLimitDescription[];
    limitSourceCodes: AcctLimitLimitSourceCodes[];
    limitTransactionSubType: AcctLimitLimitTransactionSubType[];
    limitTransactionType: AcctLimitLimitTransactionType[];
    warningCodeList: AcctLimitWarningCodeList[];
    version1: VersionType;
}
