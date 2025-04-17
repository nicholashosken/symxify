import { ExternalLoanNote } from "./externalLoanNote";
import { VersionType } from "./versionType";

export interface ExternalLoanNotePagedListSelectFieldsResponse {
    externalLoanNote: ExternalLoanNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}