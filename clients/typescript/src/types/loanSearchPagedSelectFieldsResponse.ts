import { Loan } from "./loan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanSearchPagedSelectFieldsResponse {
    loan: Loan[];
    loanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}