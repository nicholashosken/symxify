import { RegCc } from "./regCc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface RegCcSelectFieldsResponse {
    regCc: RegCc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
