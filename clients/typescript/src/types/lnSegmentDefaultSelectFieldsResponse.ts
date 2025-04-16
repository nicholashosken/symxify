import { LnSegmentDefault } from "./lnSegmentDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LnSegmentDefaultSelectFieldsResponse {
    lnSegmentDefault: LnSegmentDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}