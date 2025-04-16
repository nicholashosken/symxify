import { LoanAppVerForm } from "./loanAppVerForm";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppVerFormSelectFieldsResponse {
    loanAppVerForm: LoanAppVerForm;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
