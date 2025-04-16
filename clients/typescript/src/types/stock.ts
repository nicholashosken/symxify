import { StockTypeFractionPrice } from "./stockTypeFractionPrice";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Stock {
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    typeCollateralPercentValue: number;
    typeCollateralPercentValueSpecified: boolean;
    typeCollateralPercent: number | null;
    typeDecimalPriceValue: number;
    typeDecimalPriceValueSpecified: boolean;
    typeDecimalPrice: number | null;
    typeDescription: string;
    typeFractionPrice: StockTypeFractionPrice[];
    typeFractionPriceSpecified: boolean;
    typeStockDollarsValue: number;
    typeStockDollarsValueSpecified: boolean;
    typeStockDollars: number | null;
    typeStockEighthsValue: number;
    typeStockEighthsValueSpecified: boolean;
    typeStockEighths: number | null;
    typeTickerSymbol: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}