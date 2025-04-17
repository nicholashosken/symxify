import { VersionType } from "./versionType";
export interface LoanSchedule_2 {
    applyAsBilled: number | null;
    beginningDate: string | null;
    billingDefaultDays: number | null;
    billingMethod: number | null;
    billingNotice: number | null;
    billingNoticeMin: number | null;
    dqCalculationMethod: number | null;
    dueDay1: number | null;
    dueDay2: number | null;
    exceedLevelPmtAmt: number | null;
    expiration: string | null;
    id: string;
    interestType: number | null;
    levelPaymentAmt: number | null;
    levelPrincipalAmt: number | null;
    minimumPayment: number | null;
    payment: number | null;
    paymentCalcType: number | null;
    paymentDescription: string;
    paymentType: number | null;
    percentPrincipal: number | null;
    recordChangeDate: string | null;
    repeatCode: number | null;
    useRateChangeProcessIng: number | null;
    version1: VersionType;
}
