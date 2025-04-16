import { ExtLoan } from "./extLoan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExtLoanSelectFieldsResponse {
    extLoan: ExtLoan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
