import { VersionType } from "./versionType";

export interface DispenserAdjustType {
    glCode: number | null;
    srcGlCode: number | null;
    denomination: number | null;
    adjustAmount: number | null;
    replenishAmount: number | null;
    warnAmount: number | null;
    resetDispenser: boolean | null;
    dispenserId: number | null;
    version1: VersionType;
}