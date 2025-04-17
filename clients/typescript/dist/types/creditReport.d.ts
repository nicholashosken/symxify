import { CreditReportCollateralAccountType } from "./creditReportCollateralAccountType";
import { CreditReportCollateralPortfolioType } from "./creditReportCollateralPortfolioType";
import { VersionType } from "./versionType";
export interface CreditReport {
    collateralAccountType: CreditReportCollateralAccountType[];
    collateralPortfolioType: CreditReportCollateralPortfolioType[];
    creditCardBalOption: number | null;
    equifaxProgramId: string;
    experianProgramId: string;
    innovisProgramId: string;
    lastReportDate: string | null;
    nameLogic: number | null;
    paymentHistoryLogic: number | null;
    reportTapeFormat: number | null;
    shareAccountType: string;
    subscriberCode: string;
    transUnionProgramId: string;
    version1: VersionType;
}
