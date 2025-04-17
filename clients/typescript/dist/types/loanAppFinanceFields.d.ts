import { VersionType } from "./versionType";
export interface LoanAppFinanceFields {
    address: boolean | null;
    assetStatus: boolean | null;
    creditLimit: boolean | null;
    debtRatioUseCode: boolean | null;
    description: boolean | null;
    interestRate: boolean | null;
    itemType: boolean | null;
    liabilityBalance: boolean | null;
    liabilityStatus: boolean | null;
    locator: boolean | null;
    monthlyExpense: boolean | null;
    monthlyIncome: boolean | null;
    ownerCode: boolean | null;
    recordChangeDate: boolean | null;
    reference: boolean | null;
    type: boolean | null;
    userPledgeCode: boolean | null;
    version1: VersionType;
}
