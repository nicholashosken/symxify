import { StockFields_2 } from "./stockFields_2";

export interface StockUpdateRequest {
    stockType: number | null;
    stockFields: StockFields_2;
}