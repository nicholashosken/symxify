import { InvoiceFields_2 } from "./invoiceFields_2";
export interface InvoiceUpdateRequest {
    invoiceLocatorValue: number;
    invoiceLocatorValueSpecified: boolean;
    invoiceLocator: number | null;
    invoiceFields: InvoiceFields_2;
}
