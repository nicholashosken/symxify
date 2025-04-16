import { LoanAppVerForm } from "./loanAppVerForm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppVerFormPagedListSelectFieldsResponse {
    loanAppVerForm: LoanAppVerForm[];
    loanAppVerFormSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
