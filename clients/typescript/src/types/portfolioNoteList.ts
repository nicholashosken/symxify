import { PortfolioNote } from "./portfolioNote";

export interface PortfolioNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    portfolioNote: PortfolioNote[];
    portfolioNoteSpecified: boolean;
}