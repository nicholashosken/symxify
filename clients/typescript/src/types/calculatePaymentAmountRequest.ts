import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { LoanProjectionBaseRequest } from "./loanProjectionBaseRequest";

export interface CalculatePaymentAmountRequest extends LoanProjectionBaseRequest {
    loanAmountValue: number;
    loanAmountValueSpecified: boolean;
    loanAmount: number | null;
    maturityDateValue: string;
    maturityDateValueSpecified: boolean;
    maturityDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}