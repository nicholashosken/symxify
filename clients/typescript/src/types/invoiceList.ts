import { Invoice } from "./invoice";

export interface InvoiceList {
    hasReachedMaximumListSize: boolean | null;
    invoice: Invoice[];
}