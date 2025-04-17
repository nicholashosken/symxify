import { CurrencyCtrlFields } from "./currencyCtrlFields";
import { VersionType } from "./versionType";

export interface CurrencyCtrlSingleSelectableFields {
    includeAllCurrencyCtrlFields: boolean | null;
    currencyCtrlFields: CurrencyCtrlFields;
    version1: VersionType;
}