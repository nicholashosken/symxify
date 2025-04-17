import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
export interface ApMisc_2 {
    approverUserIds: BitMap;
    expenseProcessorUserIds: BitMap;
    fwdUserIds: BitMap;
    paymentProcessorUserIds: BitMap;
    version1: VersionType;
}
