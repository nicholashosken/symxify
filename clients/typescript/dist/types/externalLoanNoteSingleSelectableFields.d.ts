import { ExternalLoanNoteFields } from "./externalLoanNoteFields";
import { VersionType } from "./versionType";
export interface ExternalLoanNoteSingleSelectableFields {
    includeAllExternalLoanNoteFields: boolean | null;
    externalLoanNoteFields: ExternalLoanNoteFields;
    version1: VersionType;
}
