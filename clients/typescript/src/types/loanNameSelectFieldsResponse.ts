import { LoanName } from "./loanName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanNameSelectFieldsResponse {
    loanName: LoanName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}