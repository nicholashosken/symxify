import { VersionType } from "./versionType";
export interface WireInCmtCodeFields {
    commentCode: boolean | null;
    matchBusFunctionCode: boolean | null;
    matchNotifyMethod: boolean | null;
    matchTypeCode: boolean | null;
    selection: boolean | null;
    version1: VersionType;
}
