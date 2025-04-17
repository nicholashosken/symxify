import { VersionType } from "./versionType";

export interface WireOutCmtCodeFields {
    corporateCommCode: boolean | null;
    matchBusFunctionCode: boolean | null;
    matchTypeCode: boolean | null;
    matchWireType: boolean | null;
    memberCommentCode: boolean | null;
    selection: boolean | null;
    version1: VersionType;
}