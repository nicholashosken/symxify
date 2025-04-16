import { Preference } from "./preference";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceSelectFieldsResponse {
    preference: Preference;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}