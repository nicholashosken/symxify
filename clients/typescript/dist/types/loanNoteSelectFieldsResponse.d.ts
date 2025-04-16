import { LoanNote } from "./loanNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanNoteSelectFieldsResponse {
    loanNote: LoanNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
