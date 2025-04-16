import { PreferenceDefaultFields } from "./preferenceDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceDefaultSingleSelectableFields {
    includeAllPreferenceDefaultFieldsValue: boolean;
    includeAllPreferenceDefaultFieldsValueSpecified: boolean;
    includeAllPreferenceDefaultFields: boolean | null;
    preferenceDefaultFields: PreferenceDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}