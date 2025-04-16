import { ExternalLoanFields } from "./externalLoanFields";
import { ExternalLoanNameSelectableFields } from "./externalLoanNameSelectableFields";
import { ExternalLoanNoteSelectableFields } from "./externalLoanNoteSelectableFields";
import { ExternalLoanTrackingSelectableFields } from "./externalLoanTrackingSelectableFields";
import { ExternalLoanTransferSelectableFields } from "./externalLoanTransferSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanSelectableFields {
    includeAllExternalLoanFieldsValue: boolean;
    includeAllExternalLoanFieldsValueSpecified: boolean;
    includeAllExternalLoanFields: boolean | null;
    externalLoanFields: ExternalLoanFields;
    externalLoanNameSelectableFields: ExternalLoanNameSelectableFields;
    externalLoanNoteSelectableFields: ExternalLoanNoteSelectableFields;
    externalLoanTrackingSelectableFields: ExternalLoanTrackingSelectableFields;
    externalLoanTransferSelectableFields: ExternalLoanTransferSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}