import { PmtAppMethod } from "./pmtAppMethod";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PmtAppMethodSelectFieldsResponse {
    pmtAppMethod: PmtAppMethod;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
