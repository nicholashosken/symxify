import { VersionType } from "./versionType";

export interface LnSegmentDefault {
    applyAsBilled: number | null;
    billingDefaultDays: number | null;
    billingMethod: number | null;
    closeDate: string | null;
    description: string;
    discountRate: number | null;
    exceedLevelPmtAmt: number | null;
    interestRate: number | null;
    interestRateIndex: number | null;
    interestRateMargin: number | null;
    interestRateMarginSign: number | null;
    interestRateMax: number | null;
    interestRateMin: number | null;
    interestType: number | null;
    levelPaymentAmt: number | null;
    levelPrincipalAmt: number | null;
    minimumPayment: number | null;
    paymentCalcType: number | null;
    paymentType: number | null;
    percentPrincipal: number | null;
    periodicCap: number | null;
    periodicFrequency: number | null;
    periodicStartDate: string | null;
    periodicStartRate: number | null;
    riskRate: number | null;
    segmentType: number | null;
    type: number | null;
    variableRateIndicator: number | null;
    version1: VersionType;
}