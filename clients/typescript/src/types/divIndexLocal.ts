import { DivIndexLocalBackdatedFlag } from "./divIndexLocalBackdatedFlag";
import { DivIndexLocalBalanceCutoff } from "./divIndexLocalBalanceCutoff";
import { DivIndexLocalBalanceStatus } from "./divIndexLocalBalanceStatus";
import { DivIndexLocalIndexDate } from "./divIndexLocalIndexDate";
import { DivIndexLocalIndexRate } from "./divIndexLocalIndexRate";
import { DivIndexLocalPendingBalance } from "./divIndexLocalPendingBalance";
import { DivIndexLocalPendingRate } from "./divIndexLocalPendingRate";
import { DivIndexLocalStatus } from "./divIndexLocalStatus";
import { VersionType } from "./versionType";

export interface DivIndexLocal {
    backdatedFlag: DivIndexLocalBackdatedFlag[];
    balanceCutoff: DivIndexLocalBalanceCutoff[];
    balanceStatus: DivIndexLocalBalanceStatus[];
    currentMonthAvgRate: number | null;
    description: string;
    dividendIndexTable: number | null;
    inactiveStatusDate: string | null;
    indexDate: DivIndexLocalIndexDate[];
    indexRate: DivIndexLocalIndexRate[];
    pendingBalance: DivIndexLocalPendingBalance[];
    pendingRate: DivIndexLocalPendingRate[];
    status: DivIndexLocalStatus[];
    version1: VersionType;
}