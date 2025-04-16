import { ExtLoan } from "./extLoan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExtLoanSearchPagedSelectFieldsResponse {
    extLoan: ExtLoan[];
    extLoanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}