import { LoanNote } from "./loanNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanNotePagedListSelectFieldsResponse {
    loanNote: LoanNote[];
    loanNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
