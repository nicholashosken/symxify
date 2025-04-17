import { WireOutCmtCode } from "./wireOutCmtCode";
import { VersionType } from "./versionType";

export interface WireOutCmtCodePagedListSelectFieldsResponse {
    wireOutCmtCode: WireOutCmtCode[];
    token: string;
    version1: VersionType;
    messageId: string;
}