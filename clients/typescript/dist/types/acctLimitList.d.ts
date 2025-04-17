import { AcctLimit } from "./acctLimit";
export interface AcctLimitList {
    hasReachedMaximumListSize: boolean | null;
    acctLimit: AcctLimit[];
}
