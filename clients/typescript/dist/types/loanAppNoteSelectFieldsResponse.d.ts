import { LoanAppNote } from "./loanAppNote";
import { VersionType } from "./versionType";
export interface LoanAppNoteSelectFieldsResponse {
    loanAppNote: LoanAppNote;
    version1: VersionType;
    messageId: string;
}
