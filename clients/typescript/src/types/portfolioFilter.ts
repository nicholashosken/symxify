import { PortfolioChildrenFilter } from "./portfolioChildrenFilter";

export interface PortfolioFilter {
    query: string;
    portfolioChildrenFilter: PortfolioChildrenFilter;
}