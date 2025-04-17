import { InvoiceNoteFields_2 } from "./invoiceNoteFields_2";
export interface InvoiceNoteUpdateRequest {
    invoiceNoteLocatorValue: number;
    invoiceNoteLocatorValueSpecified: boolean;
    invoiceNoteLocator: number | null;
    invoiceNoteFields: InvoiceNoteFields_2;
}
