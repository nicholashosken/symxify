import { PreferenceAccess } from "./preferenceAccess";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface PreferenceAccessSearchPagedSelectFieldsResponse {
    preferenceAccess: PreferenceAccess[];
    preferenceAccessSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}