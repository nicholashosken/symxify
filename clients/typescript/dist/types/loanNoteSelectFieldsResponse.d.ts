import { LoanNote } from "./loanNote";
import { VersionType } from "./versionType";
export interface LoanNoteSelectFieldsResponse {
    loanNote: LoanNote;
    version1: VersionType;
    messageId: string;
}
