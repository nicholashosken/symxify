import { VersionType } from "./versionType";
export interface LoanRateChangeFields {
    creationDate: boolean | null;
    id: boolean | null;
    indexRate: boolean | null;
    interestRate: boolean | null;
    locator: boolean | null;
    paymentChangeDate: boolean | null;
    periodicStartDate: boolean | null;
    periodicStartRate: boolean | null;
    rateChangeDate: boolean | null;
    reamortizedPayment: boolean | null;
    recordChangeDate: boolean | null;
    version1: VersionType;
}
