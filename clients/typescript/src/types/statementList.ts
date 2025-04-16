import { Statement } from "./statement";

export interface StatementList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    statement: Statement[];
    statementSpecified: boolean;
}