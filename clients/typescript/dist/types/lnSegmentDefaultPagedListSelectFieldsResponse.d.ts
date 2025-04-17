import { LnSegmentDefault } from "./lnSegmentDefault";
import { VersionType } from "./versionType";
export interface LnSegmentDefaultPagedListSelectFieldsResponse {
    lnSegmentDefault: LnSegmentDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}
