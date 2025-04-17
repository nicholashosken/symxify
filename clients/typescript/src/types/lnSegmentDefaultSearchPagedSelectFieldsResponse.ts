import { LnSegmentDefault } from "./lnSegmentDefault";
import { VersionType } from "./versionType";

export interface LnSegmentDefaultSearchPagedSelectFieldsResponse {
    lnSegmentDefault: LnSegmentDefault[];
    token: string;
    version1: VersionType;
    messageId: string;
}