import { WireInCmtCode } from "./wireInCmtCode";
import { VersionType } from "./versionType";

export interface WireInCmtCodeSearchPagedSelectFieldsResponse {
    wireInCmtCode: WireInCmtCode[];
    token: string;
    version1: VersionType;
    messageId: string;
}