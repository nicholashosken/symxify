import { AcctRelCodeDesc } from "./acctRelCodeDesc";

export interface AcctRelCodeDescList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    acctRelCodeDesc: AcctRelCodeDesc[];
    acctRelCodeDescSpecified: boolean;
}