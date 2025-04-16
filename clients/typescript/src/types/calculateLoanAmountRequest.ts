import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { LoanProjectionBaseRequest } from "./loanProjectionBaseRequest";

export interface CalculateLoanAmountRequest extends LoanProjectionBaseRequest {
    maturityDateValue: string;
    maturityDateValueSpecified: boolean;
    maturityDate: string | null;
    paymentValue: number;
    paymentValueSpecified: boolean;
    payment: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}