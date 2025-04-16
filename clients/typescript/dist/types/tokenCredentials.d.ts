import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TokenCredentials {
    tokenId: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
