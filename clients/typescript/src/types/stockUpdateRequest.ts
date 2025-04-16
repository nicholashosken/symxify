import { StockFields_2 } from "./stockFields_2";

export interface StockUpdateRequest {
    stockTypeValue: number;
    stockTypeValueSpecified: boolean;
    stockType: number | null;
    stockFields: StockFields_2;
}