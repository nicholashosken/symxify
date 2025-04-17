import { InvoiceNote } from "./invoiceNote";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InvoiceNoteSearchPagedSelectFieldsResponse {
    invoiceNote: InvoiceNote[];
    invoiceNoteSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}