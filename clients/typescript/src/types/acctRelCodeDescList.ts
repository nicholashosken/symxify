import { AcctRelCodeDesc } from "./acctRelCodeDesc";

export interface AcctRelCodeDescList {
    hasReachedMaximumListSize: boolean | null;
    acctRelCodeDesc: AcctRelCodeDesc[];
}