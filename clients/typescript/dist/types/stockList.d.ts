import { Stock } from "./stock";
export interface StockList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    stock: Stock[];
    stockSpecified: boolean;
}
