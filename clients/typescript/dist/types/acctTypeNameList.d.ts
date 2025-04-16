import { AcctTypeName } from "./acctTypeName";
export interface AcctTypeNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    acctTypeName: AcctTypeName[];
    acctTypeNameSpecified: boolean;
}
