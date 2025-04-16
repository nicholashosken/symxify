import { LoanAppPerson } from "./loanAppPerson";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppPersonSelectFieldsResponse {
    loanAppPerson: LoanAppPerson;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
