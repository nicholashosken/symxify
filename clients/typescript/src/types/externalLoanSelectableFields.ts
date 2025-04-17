import { ExternalLoanFields } from "./externalLoanFields";
import { ExternalLoanNameSelectableFields } from "./externalLoanNameSelectableFields";
import { ExternalLoanNoteSelectableFields } from "./externalLoanNoteSelectableFields";
import { ExternalLoanTrackingSelectableFields } from "./externalLoanTrackingSelectableFields";
import { ExternalLoanTransferSelectableFields } from "./externalLoanTransferSelectableFields";
import { VersionType } from "./versionType";

export interface ExternalLoanSelectableFields {
    includeAllExternalLoanFields: boolean | null;
    externalLoanFields: ExternalLoanFields;
    externalLoanNameSelectableFields: ExternalLoanNameSelectableFields;
    externalLoanNoteSelectableFields: ExternalLoanNoteSelectableFields;
    externalLoanTrackingSelectableFields: ExternalLoanTrackingSelectableFields;
    externalLoanTransferSelectableFields: ExternalLoanTransferSelectableFields;
    version1: VersionType;
}