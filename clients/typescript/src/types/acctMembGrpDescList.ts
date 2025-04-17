import { AcctMembGrpDesc } from "./acctMembGrpDesc";

export interface AcctMembGrpDescList {
    hasReachedMaximumListSize: boolean | null;
    acctMembGrpDesc: AcctMembGrpDesc[];
}