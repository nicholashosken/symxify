import { VersionType } from "./versionType";

export interface PrinterAdjustType {
    printerId: number | null;
    glCode: number | null;
    checkAcct: string;
    adjustCount: number | null;
    replenishCount: number | null;
    warnCount: number | null;
    resetPrinter: boolean | null;
    version1: VersionType;
}