import { WireMisc } from "./wireMisc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireMiscSelectFieldsResponse {
    wireMisc: WireMisc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
