import { PartStatement } from "./partStatement";
export interface PartStatementList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    partStatement: PartStatement[];
    partStatementSpecified: boolean;
}
