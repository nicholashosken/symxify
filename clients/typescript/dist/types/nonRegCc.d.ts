import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
export interface NonRegCc {
    aggregateException: number | null;
    exceptionHoldDays: number | null;
    exceptionWarnings: BitMap;
    holdDays: number | null;
    holdOvrWarnings: BitMap;
    version1: VersionType;
}
