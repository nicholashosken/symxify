import { VersionType } from "./versionType";
export interface NonRegCcFields {
    aggregateException: boolean | null;
    exceptionHoldDays: boolean | null;
    exceptionWarnings: boolean | null;
    holdDays: boolean | null;
    holdOvrWarnings: boolean | null;
    version1: VersionType;
}
