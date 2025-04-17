import { InvoiceNote } from "./invoiceNote";

export interface InvoiceNoteList {
    hasReachedMaximumListSize: boolean | null;
    invoiceNote: InvoiceNote[];
}