import { PreferenceAccess } from "./preferenceAccess";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceAccessSelectFieldsResponse {
    preferenceAccess: PreferenceAccess;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}