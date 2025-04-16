import { NonRegCc } from "./nonRegCc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonRegCcSelectFieldsResponse {
    nonRegCc: NonRegCc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}