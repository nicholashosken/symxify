import { VersionType } from "./versionType";

export interface AnalysisPlanFields {
    cashAmountFree: boolean | null;
    cashAtmTotals: boolean | null;
    cashRate: boolean | null;
    charge: number[];
    chargeType: number[];
    definedCode: boolean | null;
    description: boolean | null;
    earnRateMethod: boolean | null;
    effectiveDate: boolean | null;
    expirationDate: boolean | null;
    free: number[];
    indexAnalysisPlan: boolean | null;
    locator: boolean | null;
    maintenanceCharge: boolean | null;
    maximumCharge: boolean | null;
    minimumCharge: boolean | null;
    plan: boolean | null;
    recType: boolean | null;
    recordChangeDate: boolean | null;
    tier1Balance: boolean | null;
    tier1EarnRate: boolean | null;
    tier2Balance: boolean | null;
    tier2EarnRate: boolean | null;
    tier3Balance: boolean | null;
    tier3EarnRate: boolean | null;
    tier4Balance: boolean | null;
    tier4EarnRate: boolean | null;
    version1: VersionType;
}