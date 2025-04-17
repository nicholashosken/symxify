import { InvoiceNoteFields } from "./invoiceNoteFields";
import { VersionType } from "./versionType";
export interface InvoiceNoteSelectableFields {
    includeAllInvoiceNoteFields: boolean | null;
    invoiceNoteFields: InvoiceNoteFields;
    version1: VersionType;
}
