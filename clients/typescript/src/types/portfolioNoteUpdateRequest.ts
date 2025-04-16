import { PortfolioNoteFields_2 } from "./portfolioNoteFields_2";

export interface PortfolioNoteUpdateRequest {
    portfolioNoteLocatorValue: number;
    portfolioNoteLocatorValueSpecified: boolean;
    portfolioNoteLocator: number | null;
    portfolioNoteFields: PortfolioNoteFields_2;
}