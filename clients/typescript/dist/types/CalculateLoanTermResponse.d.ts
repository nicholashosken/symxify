import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { LoanProjectionBaseResponse } from "./loanProjectionBaseResponse";
export interface CalculateLoanTermResponse extends LoanProjectionBaseResponse {
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
