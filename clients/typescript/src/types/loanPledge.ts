import { LoanPledgeNameList } from "./loanPledgeNameList";
import { VersionType } from "./versionType";

export interface LoanPledge {
    accountNumber: string;
    amount: number | null;
    collateralCode: number | null;
    collateralDescription: string;
    collateralNumber: string;
    effectiveDate: string | null;
    expirationDate: string | null;
    id: string;
    loanPledgeNameList: LoanPledgeNameList;
    locator: number | null;
    percent: number | null;
    priority: number | null;
    recordChangeDate: string | null;
    type: number | null;
    version1: VersionType;
}