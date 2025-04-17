import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AuthorizationProfile {
    namespace: string;
    privilegeNames: string[];
    privilegeNamesSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}