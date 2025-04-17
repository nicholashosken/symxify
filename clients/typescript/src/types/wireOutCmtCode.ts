import { VersionType } from "./versionType";

export interface WireOutCmtCode {
    corporateCommCode: number | null;
    matchBusFunctionCode: string;
    matchTypeCode: string;
    matchWireType: number | null;
    memberCommentCode: number | null;
    selection: number | null;
    version1: VersionType;
}