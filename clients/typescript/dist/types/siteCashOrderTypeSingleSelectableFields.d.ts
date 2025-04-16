import { SiteCashOrderTypeFields } from "./siteCashOrderTypeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SiteCashOrderTypeSingleSelectableFields {
    includeAllSiteCashOrderTypeFieldsValue: boolean;
    includeAllSiteCashOrderTypeFieldsValueSpecified: boolean;
    includeAllSiteCashOrderTypeFields: boolean | null;
    siteCashOrderTypeFields: SiteCashOrderTypeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
