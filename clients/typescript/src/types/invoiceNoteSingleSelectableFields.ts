import { InvoiceNoteFields } from "./invoiceNoteFields";
import { VersionType } from "./versionType";

export interface InvoiceNoteSingleSelectableFields {
    includeAllInvoiceNoteFields: boolean | null;
    invoiceNoteFields: InvoiceNoteFields;
    version1: VersionType;
}