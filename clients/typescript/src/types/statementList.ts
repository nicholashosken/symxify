import { Statement } from "./statement";

export interface StatementList {
    hasReachedMaximumListSize: boolean | null;
    statement: Statement[];
}