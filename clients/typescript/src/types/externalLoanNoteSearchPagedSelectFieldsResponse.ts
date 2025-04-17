import { ExternalLoanNote } from "./externalLoanNote";
import { VersionType } from "./versionType";

export interface ExternalLoanNoteSearchPagedSelectFieldsResponse {
    externalLoanNote: ExternalLoanNote[];
    token: string;
    version1: VersionType;
    messageId: string;
}