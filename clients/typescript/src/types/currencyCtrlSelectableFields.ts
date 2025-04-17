import { CurrencyCtrlFields } from "./currencyCtrlFields";
import { VersionType } from "./versionType";

export interface CurrencyCtrlSelectableFields {
    includeAllCurrencyCtrlFields: boolean | null;
    currencyCtrlFields: CurrencyCtrlFields;
    version1: VersionType;
}