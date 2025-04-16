import { CreditReportCollateralAccountType } from "./creditReportCollateralAccountType";
import { CreditReportCollateralPortfolioType } from "./creditReportCollateralPortfolioType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CreditReport {
    collateralAccountType: CreditReportCollateralAccountType[];
    collateralAccountTypeSpecified: boolean;
    collateralPortfolioType: CreditReportCollateralPortfolioType[];
    collateralPortfolioTypeSpecified: boolean;
    creditCardBalOptionValue: number;
    creditCardBalOptionValueSpecified: boolean;
    creditCardBalOption: number | null;
    equifaxProgramId: string;
    experianProgramId: string;
    innovisProgramId: string;
    lastReportDateValue: string;
    lastReportDateValueSpecified: boolean;
    lastReportDate: string | null;
    nameLogicValue: number;
    nameLogicValueSpecified: boolean;
    nameLogic: number | null;
    paymentHistoryLogicValue: number;
    paymentHistoryLogicValueSpecified: boolean;
    paymentHistoryLogic: number | null;
    reportTapeFormatValue: number;
    reportTapeFormatValueSpecified: boolean;
    reportTapeFormat: number | null;
    shareAccountType: string;
    subscriberCode: string;
    transUnionProgramId: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}