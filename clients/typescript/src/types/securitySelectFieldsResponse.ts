import { Security } from "./security";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecuritySelectFieldsResponse {
    security: Security;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}