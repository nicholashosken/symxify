import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StockFields {
    typeValue: boolean;
    typeValueSpecified: boolean;
    type: boolean | null;
    typeCollateralPercentValue: boolean;
    typeCollateralPercentValueSpecified: boolean;
    typeCollateralPercent: boolean | null;
    typeDecimalPriceValue: boolean;
    typeDecimalPriceValueSpecified: boolean;
    typeDecimalPrice: boolean | null;
    typeDescriptionValue: boolean;
    typeDescriptionValueSpecified: boolean;
    typeDescription: boolean | null;
    typeFractionPrice: number[];
    typeFractionPriceSpecified: boolean;
    typeStockDollarsValue: boolean;
    typeStockDollarsValueSpecified: boolean;
    typeStockDollars: boolean | null;
    typeStockEighthsValue: boolean;
    typeStockEighthsValueSpecified: boolean;
    typeStockEighths: boolean | null;
    typeTickerSymbolValue: boolean;
    typeTickerSymbolValueSpecified: boolean;
    typeTickerSymbol: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}