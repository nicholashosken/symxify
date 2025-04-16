import { PreferenceFields } from "./preferenceFields";
import { PreferenceAccessSelectableFields } from "./preferenceAccessSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PreferenceSelectableFields {
    includeAllPreferenceFieldsValue: boolean;
    includeAllPreferenceFieldsValueSpecified: boolean;
    includeAllPreferenceFields: boolean | null;
    preferenceFields: PreferenceFields;
    preferenceAccessSelectableFields: PreferenceAccessSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
