import { DivIndexLocalBackdatedFlag_2 } from "./divIndexLocalBackdatedFlag_2";
import { DivIndexLocalBalanceCutoff_2 } from "./divIndexLocalBalanceCutoff_2";
import { DivIndexLocalBalanceStatus_2 } from "./divIndexLocalBalanceStatus_2";
import { DivIndexLocalIndexDate_2 } from "./divIndexLocalIndexDate_2";
import { DivIndexLocalIndexRate_2 } from "./divIndexLocalIndexRate_2";
import { DivIndexLocalPendingBalance_2 } from "./divIndexLocalPendingBalance_2";
import { DivIndexLocalPendingRate_2 } from "./divIndexLocalPendingRate_2";
import { DivIndexLocalStatus_2 } from "./divIndexLocalStatus_2";
import { VersionType } from "./versionType";
export interface DivIndexLocal_2 {
    backdatedFlag: DivIndexLocalBackdatedFlag_2[];
    balanceCutoff: DivIndexLocalBalanceCutoff_2[];
    balanceStatus: DivIndexLocalBalanceStatus_2[];
    currentMonthAvgRate: number | null;
    description: string;
    dividendIndexTable: number | null;
    inactiveStatusDate: string | null;
    indexDate: DivIndexLocalIndexDate_2[];
    indexRate: DivIndexLocalIndexRate_2[];
    pendingBalance: DivIndexLocalPendingBalance_2[];
    pendingRate: DivIndexLocalPendingRate_2[];
    status: DivIndexLocalStatus_2[];
    version1: VersionType;
}
