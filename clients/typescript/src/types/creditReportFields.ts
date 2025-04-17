import { VersionType } from "./versionType";

export interface CreditReportFields {
    collateralAccountType: number[];
    collateralPortfolioType: number[];
    creditCardBalOption: boolean | null;
    equifaxProgramId: boolean | null;
    experianProgramId: boolean | null;
    innovisProgramId: boolean | null;
    lastReportDate: boolean | null;
    nameLogic: boolean | null;
    paymentHistoryLogic: boolean | null;
    reportTapeFormat: boolean | null;
    shareAccountType: boolean | null;
    subscriberCode: boolean | null;
    transUnionProgramId: boolean | null;
    version1: VersionType;
}