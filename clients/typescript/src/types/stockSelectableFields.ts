import { StockFields } from "./stockFields";
import { VersionType } from "./versionType";

export interface StockSelectableFields {
    includeAllStockFields: boolean | null;
    stockFields: StockFields;
    version1: VersionType;
}