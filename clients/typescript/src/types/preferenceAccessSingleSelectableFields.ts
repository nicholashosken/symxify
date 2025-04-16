import { PreferenceAccessFields } from "./preferenceAccessFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceAccessSingleSelectableFields {
    includeAllPreferenceAccessFieldsValue: boolean;
    includeAllPreferenceAccessFieldsValueSpecified: boolean;
    includeAllPreferenceAccessFields: boolean | null;
    preferenceAccessFields: PreferenceAccessFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}