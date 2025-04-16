import { PmtAppMethod } from "./pmtAppMethod";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PmtAppMethodSearchPagedSelectFieldsResponse {
    pmtAppMethod: PmtAppMethod[];
    pmtAppMethodSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
