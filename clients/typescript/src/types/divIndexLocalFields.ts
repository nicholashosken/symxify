import { VersionType } from "./versionType";

export interface DivIndexLocalFields {
    backdatedFlag: number[];
    balanceCutoff: number[];
    balanceStatus: number[];
    currentMonthAvgRate: boolean | null;
    description: boolean | null;
    dividendIndexTable: boolean | null;
    inactiveStatusDate: boolean | null;
    indexDate: number[];
    indexRate: number[];
    pendingBalance: number[];
    pendingRate: number[];
    status: number[];
    version1: VersionType;
}