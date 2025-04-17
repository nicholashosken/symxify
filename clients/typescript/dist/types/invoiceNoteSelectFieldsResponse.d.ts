import { InvoiceNote } from "./invoiceNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InvoiceNoteSelectFieldsResponse {
    invoiceNote: InvoiceNote;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
