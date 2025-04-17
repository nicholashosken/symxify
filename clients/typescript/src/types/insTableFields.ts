import { VersionType } from "./versionType";

export interface InsTableFields {
    balloonPremium: boolean | null;
    balloonPremiumBase: boolean | null;
    deviationFactor: boolean | null;
    formula: boolean | null;
    frequency: boolean | null;
    frequencyDay: boolean | null;
    insuranceCode: boolean | null;
    insuranceTable: boolean | null;
    longDescription: boolean | null;
    maxAge: boolean | null;
    maxInsurableAmount: boolean | null;
    maxJointAge: boolean | null;
    maxMonthlyBenefit: boolean | null;
    maxTerminMonths: boolean | null;
    premium: boolean | null;
    premiumBase: boolean | null;
    shortDescription: boolean | null;
    subFormula: boolean | null;
    termPremium: number[];
    version1: VersionType;
}