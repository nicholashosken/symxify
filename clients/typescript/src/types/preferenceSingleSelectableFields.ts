import { PreferenceFields } from "./preferenceFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceSingleSelectableFields {
    includeAllPreferenceFieldsValue: boolean;
    includeAllPreferenceFieldsValueSpecified: boolean;
    includeAllPreferenceFields: boolean | null;
    preferenceFields: PreferenceFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}