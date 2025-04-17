import { InvoiceNote } from "./invoiceNote";
import { VersionType } from "./versionType";

export interface InvoiceNoteSelectFieldsResponse {
    invoiceNote: InvoiceNote;
    version1: VersionType;
    messageId: string;
}