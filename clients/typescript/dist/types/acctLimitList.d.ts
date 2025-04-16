import { AcctLimit } from "./acctLimit";
export interface AcctLimitList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    acctLimit: AcctLimit[];
    acctLimitSpecified: boolean;
}
