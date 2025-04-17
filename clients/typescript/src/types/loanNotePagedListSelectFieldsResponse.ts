import { LoanNote } from "./loanNote";
import { VersionType } from "./versionType";

export interface LoanNotePagedListSelectFieldsResponse {
    loanNote: LoanNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}