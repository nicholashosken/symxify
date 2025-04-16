import { PreferenceDefaultFields } from "./preferenceDefaultFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PreferenceDefaultSelectableFields {
    includeAllPreferenceDefaultFieldsValue: boolean;
    includeAllPreferenceDefaultFieldsValueSpecified: boolean;
    includeAllPreferenceDefaultFields: boolean | null;
    preferenceDefaultFields: PreferenceDefaultFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
