import { InvoiceFields } from "./invoiceFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceSingleSelectableFields {
    includeAllInvoiceFieldsValue: boolean;
    includeAllInvoiceFieldsValueSpecified: boolean;
    includeAllInvoiceFields: boolean | null;
    invoiceFields: InvoiceFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}