import { VersionType } from "./versionType";
export interface AcctLimitFields {
    limitDescription: number[];
    limitSourceCodes: number[];
    limitTransactionSubType: number[];
    limitTransactionType: number[];
    warningCodeList: number[];
    version1: VersionType;
}
