import { Security } from "./security";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface SecuritySearchPagedSelectFieldsResponse {
    security: Security[];
    securitySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
