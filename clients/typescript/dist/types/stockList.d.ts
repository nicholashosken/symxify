import { Stock } from "./stock";
export interface StockList {
    hasReachedMaximumListSize: boolean | null;
    stock: Stock[];
}
