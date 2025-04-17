import { Invoice } from "./invoice";
export interface InvoiceList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    invoice: Invoice[];
    invoiceSpecified: boolean;
}
