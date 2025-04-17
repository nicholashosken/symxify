import { WireOutCmtCode } from "./wireOutCmtCode";
import { VersionType } from "./versionType";
export interface WireOutCmtCodeSearchPagedSelectFieldsResponse {
    wireOutCmtCode: WireOutCmtCode[];
    token: string;
    version1: VersionType;
    messageId: string;
}
