import { LnSegmentDefault } from "./lnSegmentDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LnSegmentDefaultPagedListSelectFieldsResponse {
    lnSegmentDefault: LnSegmentDefault[];
    lnSegmentDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
