import { VersionType } from "./versionType";

export interface LoanAppFinance_2 {
    address: string;
    assetStatus: number | null;
    creditLimit: number | null;
    debtRatioUseCode: number | null;
    description: string;
    interestRate: number | null;
    itemType: string;
    liabilityBalance: number | null;
    liabilityStatus: number | null;
    locator: number | null;
    monthlyExpense: number | null;
    monthlyIncome: number | null;
    ownerCode: number | null;
    recordChangeDate: string | null;
    reference: string;
    type: number | null;
    userPledgeCode: number | null;
    version1: VersionType;
}