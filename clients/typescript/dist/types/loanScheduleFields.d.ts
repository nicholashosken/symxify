import { VersionType } from "./versionType";
export interface LoanScheduleFields {
    applyAsBilled: boolean | null;
    beginningDate: boolean | null;
    billingDefaultDays: boolean | null;
    billingMethod: boolean | null;
    billingNotice: boolean | null;
    billingNoticeMin: boolean | null;
    dqCalculationMethod: boolean | null;
    dueDay1: boolean | null;
    dueDay2: boolean | null;
    exceedLevelPmtAmt: boolean | null;
    expiration: boolean | null;
    id: boolean | null;
    interestType: boolean | null;
    levelPaymentAmt: boolean | null;
    levelPrincipalAmt: boolean | null;
    minimumPayment: boolean | null;
    payment: boolean | null;
    paymentCalcType: boolean | null;
    paymentDescription: boolean | null;
    paymentType: boolean | null;
    percentPrincipal: boolean | null;
    recordChangeDate: boolean | null;
    repeatCode: boolean | null;
    useRateChangeProcessIng: boolean | null;
    version1: VersionType;
}
