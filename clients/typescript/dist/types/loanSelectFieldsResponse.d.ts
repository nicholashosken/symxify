import { Loan } from "./loan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanSelectFieldsResponse {
    loan: Loan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
