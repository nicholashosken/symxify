import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
export interface ApMisc {
    approverUserIds: BitMap;
    expenseProcessorUserIds: BitMap;
    fwdUserIds: BitMap;
    paymentProcessorUserIds: BitMap;
    version1: VersionType;
}
