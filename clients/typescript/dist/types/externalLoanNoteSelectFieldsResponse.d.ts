import { ExternalLoanNote } from "./externalLoanNote";
import { VersionType } from "./versionType";
export interface ExternalLoanNoteSelectFieldsResponse {
    externalLoanNote: ExternalLoanNote;
    version1: VersionType;
    messageId: string;
}
