import { DealerStatement } from "./dealerStatement";

export interface DealerStatementList {
    hasReachedMaximumListSize: boolean | null;
    dealerStatement: DealerStatement[];
}