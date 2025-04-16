import { LoanAppPerson } from "./loanAppPerson";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPersonSearchPagedSelectFieldsResponse {
    loanAppPerson: LoanAppPerson[];
    loanAppPersonSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
