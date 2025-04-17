import { LoanAppNote } from "./loanAppNote";
import { VersionType } from "./versionType";
export interface LoanAppNotePagedListSelectFieldsResponse {
    loanAppNote: LoanAppNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}
