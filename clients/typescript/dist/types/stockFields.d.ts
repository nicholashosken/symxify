import { VersionType } from "./versionType";
export interface StockFields {
    type: boolean | null;
    typeCollateralPercent: boolean | null;
    typeDecimalPrice: boolean | null;
    typeDescription: boolean | null;
    typeFractionPrice: number[];
    typeStockDollars: boolean | null;
    typeStockEighths: boolean | null;
    typeTickerSymbol: boolean | null;
    version1: VersionType;
}
