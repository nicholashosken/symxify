import { CurrencyCtrlFields } from "./currencyCtrlFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CurrencyCtrlSelectableFields {
    includeAllCurrencyCtrlFieldsValue: boolean;
    includeAllCurrencyCtrlFieldsValueSpecified: boolean;
    includeAllCurrencyCtrlFields: boolean | null;
    currencyCtrlFields: CurrencyCtrlFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
