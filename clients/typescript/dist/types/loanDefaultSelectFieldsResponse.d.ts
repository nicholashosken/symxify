import { LoanDefault } from "./loanDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanDefaultSelectFieldsResponse {
    loanDefault: LoanDefault;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
