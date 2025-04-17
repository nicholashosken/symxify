import { InvoiceNote } from "./invoiceNote";

export interface InvoiceNoteList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    invoiceNote: InvoiceNote[];
    invoiceNoteSpecified: boolean;
}