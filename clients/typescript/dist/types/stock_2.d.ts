import { StockTypeFractionPrice_2 } from "./stockTypeFractionPrice_2";
import { VersionType } from "./versionType";
export interface Stock_2 {
    type: number | null;
    typeCollateralPercent: number | null;
    typeDecimalPrice: number | null;
    typeDescription: string;
    typeFractionPrice: StockTypeFractionPrice_2[];
    typeStockDollars: number | null;
    typeStockEighths: number | null;
    typeTickerSymbol: string;
    version1: VersionType;
}
