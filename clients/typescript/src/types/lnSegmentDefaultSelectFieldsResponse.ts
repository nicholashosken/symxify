import { LnSegmentDefault } from "./lnSegmentDefault";
import { VersionType } from "./versionType";

export interface LnSegmentDefaultSelectFieldsResponse {
    lnSegmentDefault: LnSegmentDefault;
    version1: VersionType;
    messageId: string;
}