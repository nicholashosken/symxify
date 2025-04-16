import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { LoanProjectionBaseResponse } from "./loanProjectionBaseResponse";

export interface CalculatePaymentAmountResponse extends LoanProjectionBaseResponse {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}