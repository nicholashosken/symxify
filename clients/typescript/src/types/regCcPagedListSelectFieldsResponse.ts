import { RegCc } from "./regCc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface RegCcPagedListSelectFieldsResponse {
    regCc: RegCc[];
    regCcSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}