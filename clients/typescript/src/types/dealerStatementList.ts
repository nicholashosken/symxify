import { DealerStatement } from "./dealerStatement";

export interface DealerStatementList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    dealerStatement: DealerStatement[];
    dealerStatementSpecified: boolean;
}