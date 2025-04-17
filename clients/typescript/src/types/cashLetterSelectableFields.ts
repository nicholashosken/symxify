import { CashLetterFields } from "./cashLetterFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CashLetterSelectableFields {
    includeAllCashLetterFieldsValue: boolean;
    includeAllCashLetterFieldsValueSpecified: boolean;
    includeAllCashLetterFields: boolean | null;
    cashLetterFields: CashLetterFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}