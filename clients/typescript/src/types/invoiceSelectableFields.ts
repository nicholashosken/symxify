import { InvoiceFields } from "./invoiceFields";
import { InvoiceNoteSelectableFields } from "./invoiceNoteSelectableFields";
import { VersionType } from "./versionType";

export interface InvoiceSelectableFields {
    includeAllInvoiceFields: boolean | null;
    invoiceFields: InvoiceFields;
    invoiceNoteSelectableFields: InvoiceNoteSelectableFields;
    version1: VersionType;
}