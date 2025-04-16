import { LoanAppNote } from "./loanAppNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppNoteSelectFieldsResponse {
    loanAppNote: LoanAppNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}