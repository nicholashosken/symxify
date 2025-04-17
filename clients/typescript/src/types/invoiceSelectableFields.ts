import { InvoiceFields } from "./invoiceFields";
import { InvoiceNoteSelectableFields } from "./invoiceNoteSelectableFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceSelectableFields {
    includeAllInvoiceFieldsValue: boolean;
    includeAllInvoiceFieldsValueSpecified: boolean;
    includeAllInvoiceFields: boolean | null;
    invoiceFields: InvoiceFields;
    invoiceNoteSelectableFields: InvoiceNoteSelectableFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}