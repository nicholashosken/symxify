import { InvoiceNoteFilter } from "./invoiceNoteFilter";
import { VersionType } from "./versionType";
export interface InvoiceChildrenFilter {
    invoiceNoteFilter: InvoiceNoteFilter;
    version1: VersionType;
}
