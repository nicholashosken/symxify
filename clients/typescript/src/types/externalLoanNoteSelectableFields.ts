import { ExternalLoanNoteFields } from "./externalLoanNoteFields";
import { VersionType } from "./versionType";

export interface ExternalLoanNoteSelectableFields {
    includeAllExternalLoanNoteFields: boolean | null;
    externalLoanNoteFields: ExternalLoanNoteFields;
    version1: VersionType;
}