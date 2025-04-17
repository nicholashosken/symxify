import { AcctTypeName } from "./acctTypeName";

export interface AcctTypeNameList {
    hasReachedMaximumListSize: boolean | null;
    acctTypeName: AcctTypeName[];
}