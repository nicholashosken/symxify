import { InvoiceFields } from "./invoiceFields";
import { VersionType } from "./versionType";
export interface InvoiceSingleSelectableFields {
    includeAllInvoiceFields: boolean | null;
    invoiceFields: InvoiceFields;
    version1: VersionType;
}
