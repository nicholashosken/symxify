import { LoanAppNote } from "./loanAppNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppNotePagedListSelectFieldsResponse {
    loanAppNote: LoanAppNote[];
    loanAppNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}