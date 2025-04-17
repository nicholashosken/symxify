import { VersionType } from "./versionType";
export interface LoanRateChange {
    creationDate: string | null;
    id: string;
    indexRate: number | null;
    interestRate: number | null;
    locator: number | null;
    paymentChangeDate: string | null;
    periodicStartDate: string | null;
    periodicStartRate: number | null;
    rateChangeDate: string | null;
    reamortizedPayment: number | null;
    recordChangeDate: string | null;
    version1: VersionType;
}
