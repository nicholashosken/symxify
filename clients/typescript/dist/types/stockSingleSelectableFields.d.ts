import { StockFields } from "./stockFields";
import { VersionType } from "./versionType";
export interface StockSingleSelectableFields {
    includeAllStockFields: boolean | null;
    stockFields: StockFields;
    version1: VersionType;
}
