import { VersionType } from "./versionType";

export interface LoanLnSegmentBilling {
    billedDate: string | null;
    dueDate: string | null;
    escrowBilled: number | null;
    escrowPeriod: number | null;
    escrowRemain: number | null;
    feesBilled: number | null;
    feesRemain: number | null;
    id: string;
    interestBilled: number | null;
    interestRemain: number | null;
    lastPaymentDate: string | null;
    lateChargeBilled: number | null;
    lateChargePeriod: number | null;
    lateChargeRemain: number | null;
    locator: number | null;
    payment: number | null;
    princIntBilled: number | null;
    princIntRemain: number | null;
    principalBilled: number | null;
    principalRemain: number | null;
    recordChangeDate: string | null;
    salesTaxBilled: number | null;
    salesTaxRemain: number | null;
    statusIndicator: number | null;
    totalBilled: number | null;
    totalRemainIng: number | null;
    version1: VersionType;
}