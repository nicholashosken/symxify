import { InvoiceNoteFields } from "./invoiceNoteFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceNoteSingleSelectableFields {
    includeAllInvoiceNoteFieldsValue: boolean;
    includeAllInvoiceNoteFieldsValueSpecified: boolean;
    includeAllInvoiceNoteFields: boolean | null;
    invoiceNoteFields: InvoiceNoteFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}