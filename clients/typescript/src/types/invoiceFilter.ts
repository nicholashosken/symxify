import { InvoiceChildrenFilter } from "./invoiceChildrenFilter";

export interface InvoiceFilter {
    query: string;
    invoiceChildrenFilter: InvoiceChildrenFilter;
}