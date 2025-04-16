import { InstitutionFields } from "./institutionFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InstitutionSelectableFields {
    includeAllInstitutionFieldsValue: boolean;
    includeAllInstitutionFieldsValueSpecified: boolean;
    includeAllInstitutionFields: boolean | null;
    institutionFields: InstitutionFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}