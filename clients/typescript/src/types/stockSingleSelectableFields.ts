import { StockFields } from "./stockFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StockSingleSelectableFields {
    includeAllStockFieldsValue: boolean;
    includeAllStockFieldsValueSpecified: boolean;
    includeAllStockFields: boolean | null;
    stockFields: StockFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}