import { VersionType } from "./versionType";
export interface WireInCmtCode {
    commentCode: number | null;
    matchBusFunctionCode: string;
    matchNotifyMethod: number | null;
    matchTypeCode: string;
    selection: number | null;
    version1: VersionType;
}
