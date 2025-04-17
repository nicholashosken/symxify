import { PartStatement } from "./partStatement";

export interface PartStatementList {
    hasReachedMaximumListSize: boolean | null;
    partStatement: PartStatement[];
}