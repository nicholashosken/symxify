import { PreferenceDefault } from "./preferenceDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PreferenceDefaultSelectFieldsResponse {
    preferenceDefault: PreferenceDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
