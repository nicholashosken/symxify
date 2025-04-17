import { StockTypeFractionPrice } from "./stockTypeFractionPrice";
import { VersionType } from "./versionType";

export interface Stock {
    type: number | null;
    typeCollateralPercent: number | null;
    typeDecimalPrice: number | null;
    typeDescription: string;
    typeFractionPrice: StockTypeFractionPrice[];
    typeStockDollars: number | null;
    typeStockEighths: number | null;
    typeTickerSymbol: string;
    version1: VersionType;
}