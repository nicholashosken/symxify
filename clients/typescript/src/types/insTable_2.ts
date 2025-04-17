import { InsTableTermPremium_2 } from "./insTableTermPremium_2";
import { VersionType } from "./versionType";

export interface InsTable_2 {
    balloonPremium: number | null;
    balloonPremiumBase: number | null;
    deviationFactor: number | null;
    formula: number | null;
    frequency: number | null;
    frequencyDay: number | null;
    insuranceCode: number | null;
    insuranceTable: number | null;
    longDescription: string;
    maxAge: number | null;
    maxInsurableAmount: number | null;
    maxJointAge: number | null;
    maxMonthlyBenefit: number | null;
    maxTerminMonths: number | null;
    premium: number | null;
    premiumBase: number | null;
    shortDescription: string;
    subFormula: number | null;
    termPremium: InsTableTermPremium_2[];
    version1: VersionType;
}