import { Loan } from "./loan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanSelectFieldsFilterChildrenResponse {
    loan: Loan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
