import { VersionType } from "./versionType";

export interface LnSegmentDefaultFields {
    applyAsBilled: boolean | null;
    billingDefaultDays: boolean | null;
    billingMethod: boolean | null;
    closeDate: boolean | null;
    description: boolean | null;
    discountRate: boolean | null;
    exceedLevelPmtAmt: boolean | null;
    interestRate: boolean | null;
    interestRateIndex: boolean | null;
    interestRateMargin: boolean | null;
    interestRateMarginSign: boolean | null;
    interestRateMax: boolean | null;
    interestRateMin: boolean | null;
    interestType: boolean | null;
    levelPaymentAmt: boolean | null;
    levelPrincipalAmt: boolean | null;
    minimumPayment: boolean | null;
    paymentCalcType: boolean | null;
    paymentType: boolean | null;
    percentPrincipal: boolean | null;
    periodicCap: boolean | null;
    periodicFrequency: boolean | null;
    periodicStartDate: boolean | null;
    periodicStartRate: boolean | null;
    riskRate: boolean | null;
    segmentType: boolean | null;
    type: boolean | null;
    variableRateIndicator: boolean | null;
    version1: VersionType;
}