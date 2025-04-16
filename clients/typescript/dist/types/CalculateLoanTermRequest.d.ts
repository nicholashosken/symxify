import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { LoanProjectionBaseRequest } from "./loanProjectionBaseRequest";
export interface CalculateLoanTermRequest extends LoanProjectionBaseRequest {
    loanAmountValue: number;
    loanAmountValueSpecified: boolean;
    loanAmount: number | null;
    paymentValue: number;
    paymentValueSpecified: boolean;
    payment: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
