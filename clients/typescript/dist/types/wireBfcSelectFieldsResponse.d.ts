import { WireBfc } from "./wireBfc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBfcSelectFieldsResponse {
    wireBfc: WireBfc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
