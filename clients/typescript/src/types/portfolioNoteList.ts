import { PortfolioNote } from "./portfolioNote";

export interface PortfolioNoteList {
    hasReachedMaximumListSize: boolean | null;
    portfolioNote: PortfolioNote[];
}