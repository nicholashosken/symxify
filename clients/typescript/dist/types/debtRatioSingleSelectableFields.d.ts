import { DebtRatioFields } from "./debtRatioFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DebtRatioSingleSelectableFields {
    includeAllDebtRatioFieldsValue: boolean;
    includeAllDebtRatioFieldsValueSpecified: boolean;
    includeAllDebtRatioFields: boolean | null;
    debtRatioFields: DebtRatioFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
