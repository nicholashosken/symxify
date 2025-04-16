import { LoanAppFinance } from "./loanAppFinance";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppFinanceSearchPagedSelectFieldsResponse {
    loanAppFinance: LoanAppFinance[];
    loanAppFinanceSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}