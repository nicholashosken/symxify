import { WireInCmtCode } from "./wireInCmtCode";
import { VersionType } from "./versionType";
export interface WireInCmtCodeSelectFieldsResponse {
    wireInCmtCode: WireInCmtCode;
    version1: VersionType;
    messageId: string;
}
