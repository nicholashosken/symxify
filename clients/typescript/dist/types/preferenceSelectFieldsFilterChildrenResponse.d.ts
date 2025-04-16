import { Preference } from "./preference";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PreferenceSelectFieldsFilterChildrenResponse {
    preference: Preference;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
